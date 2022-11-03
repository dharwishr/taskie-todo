require "test_helper"

class TaskTest < ActiveSupport::TestCase
  def setup
    @user = create(:user)
    @task = create(:task, user: @user)
  end

  def test_values_of_created_at_and_updated_at
    task = Task.new(title: "This is a test task", user: @user, duedate: "12/12/2022")
    assert_nil task.created_at
    assert_nil task.updated_at

    task.save!
    assert_not_nil task.created_at
    assert_equal task.updated_at, task.created_at

    task.update!(title: "This is a updated task")
    assert_not_equal task.updated_at, task.created_at
  end

  def test_task_should_not_be_valid_without_user
    @task.user = nil
    assert_not @task.save
    assert_includes @task.errors.full_messages, "User must exist"
  end

  def test_task_should_not_be_valid_without_duedate
    @task.duedate = nil
    assert_not @task.save
    assert_includes @task.errors.full_messages, "Duedate can't be blank"
  end

  def test_task_title_should_not_exceed_maximum_length
    @task.title = "a" * (Task::MAX_TITLE_LENGTH + 1)
    assert_not @task.valid?
  end

  def test_task_count_increases_on_saving
    assert_difference ["Task.count"] do
      create(:task, user: @user)
    end
  end

  def test_task_should_not_be_valid_without_title
    @task.title = ""
    assert_not @task.valid?
  end

end
