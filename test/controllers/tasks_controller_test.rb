require "test_helper"

class TasksControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = create(:user)
    @task = create(:task, user: @user)
    @user_headers = headers(@user)
  end

  def test_should_list_all_tasks_for_valid_user
    get tasks_path, headers: @user_headers
    assert_response :success
    response_body = response.parsed_body
    all_tasks = response_body["tasks"]

    overdue_tasks_count = Task.where('duedate  < ?', Date.today).where(completed: false).count
    completed_tasks_count = Task.where(completed: true).count

    assert_equal all_tasks["overdue"].length, overdue_tasks_count
    assert_equal all_tasks["completed"].length, completed_tasks_count
  end

  def test_should_create_valid_task
    post tasks_path,
      params: { task: { title: "Todo 1", user_id: @user.id, duedate: "10/10/2022"} },
      headers: @user_headers
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfully_created", entity: "Task")
  end

  def test_shouldnt_create_task_without_title
    post tasks_path, params: { task: { title: "", user_id: @user.id, duedate: "10/10/2022" } },
      headers: @user_headers
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["error"], "Title can't be blank"
  end

  def test_user_can_update_any_task_fields
    new_title = "#{@task.title}-(updated)"
    task_params = { task: { title: new_title } }

    put task_path(@task.id), params: task_params, headers: @user_headers
    assert_response :success
    @task.reload
    assert_equal @task.title, new_title
  end

  def test_should_destroy_task
    assert_difference "Task.count", -1 do
      delete task_path(@task.id), headers: @user_headers
    end

    assert_response :ok
  end

  def test_user_can_change_task_to_completed
    task_params = { task: { completed: true } }

    put task_path(@task.id), params: task_params, headers: @user_headers
    assert_response :success
    @task.reload
    assert @task.completed?
  end

  def test_not_found_error_rendered_for_invalid_task_slug
    invalid_id = "invalid-id"

    get task_path(invalid_id), headers: @user_headers
    assert_response :not_found
    assert_equal response.parsed_body["error"], t("not_found", entity: "Task")
  end
end
