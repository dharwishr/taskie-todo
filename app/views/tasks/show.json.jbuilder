json.task do
    json.partial! "tasks/task", task: @task
    json.duedate @task.duedate
end