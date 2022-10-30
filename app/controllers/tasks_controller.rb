class TasksController < ApplicationController
    before_action :load_task!, only: %i[show update destroy]
    
    def index
        tasks = Task.all
        render status: :ok, json: { tasks: tasks }
    end

    def show
        render
    end

    def update
        @task.update!(task_params)
        respond_with_success(t("successfully_updated", entity: "Task")) unless params.key?(:quiet)
      end
    end

    def destroy
        @task.destroy!
        respond_with_success(t("successfully_deleted", entity: "Task"))
    end

    private
        def load_task!
            @task = Task.find_by!(slug: params[:id])
        end
    
        def task_params
            params.require(:task).permit(:title, :duedate, :completed)
        end
end
