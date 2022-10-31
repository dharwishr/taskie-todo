json.tasks do
    json.all @all_tasks do |all_task|
        json.partial! "tasks/task", task: all_task
        json.duedate all_task.duedate.strftime("%B %d, %Y")
    end
    json.overdue @overdue_tasks do |overdue_task|
        json.partial! "tasks/task", task: overdue_task
        json.duedate overdue_task.duedate.strftime("%B %d, %Y")
    end
    json.completed @completed_tasks do |completed_task|
        json.partial! "tasks/task", task: completed_task
        json.duedate completed_task.duedate.strftime("%B %d, %Y")
    end
 end