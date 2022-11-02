class TasksController < ApplicationController
    after_action :verify_authorized, except: :index
    after_action :verify_policy_scoped, only: :index
    before_action :load_task!, only: %i[show update destroy]
    
    def index
        tasks = policy_scope(Task)
        @all_tasks = tasks.order(duedate: :desc)
        @overdue_tasks = tasks.where('duedate  < ?', Date.today).where(completed: false).order(duedate: :desc)
        @completed_tasks = tasks.where(completed: true).order(duedate: :desc)
    end

    def create
        task = current_user.tasks.new(task_params)
        authorize task
        task.save!
        respond_with_success(t("successfully_created", entity: "Task"))
    end

    def show
        authorize @task
        render
    end

    def update
        authorize @task
        @task.update!(task_params)
        respond_with_success(t("successfully_updated", entity: "Task")) unless params.key?(:quiet)
    end

    def destroy
        authorize @task
        @task.destroy!
        respond_with_success(t("successfully_deleted", entity: "Task"))
    end

    private
        def load_task!
            @task = Task.find_by!(id: params[:id])
        end
    
        def task_params
            params.require(:task).permit(:title, :duedate, :completed)
        end
end
