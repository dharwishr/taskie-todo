# frozen_string_literal: true

class TaskPolicy
    attr_reader :user, :task
  
    def initialize(user, task)
        @user = user
        @task = task
    end
    
    def show?
        task.user_id == user.id
    end

    def edit?
        show?
    end

    def update?
        show?
    end
  
    def create?
        true
    end
  
    def destroy?
        show?
    end
  
    class Scope
      attr_reader :user, :scope
  
      def initialize(user, scope)
        @user = user
        @scope = scope
      end
  
      def resolve
        scope.where(user_id: user.id)
      end
    end
  end
  