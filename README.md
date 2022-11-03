# Taskie to-do App
App link : https://taskie-todo.herokuapp.com/

Default Login :
* Email: `sam@example.com` , Password: `welcome`
* Email: `john@example.com` , Password: `welcome`
## Controllers
* Task Controller 
    * `index` -> List tasks of logged in user
        * `all`-> includes all tasks
        * `overdue` -> includes overdue tasks
        * `completed` -> includes completed tasks
    * `create` -> Create a new task under user
        
        input: `:title`, `:duedate`, `:completed`
    * `show` -> Return specifc task data (input: `id`)
    * `update` -> Update specific task which accepts `:id`, `:title`, `:duedate`, `:completed` values
    * `destroy` -> Delete specific task (input: `id`)
* User Controller
    * `create` -> Create a new user.


        input: `:name`, `:email`, `:password`, `:password_confirmation`
            
* Session Controller
    * `create` -> Create a new session for logged in user.

        input: `:email`, `:password`

### Test covarage : 91.28% 


## How to use API which return a sub-array with maximum possible sum
`POST /arrays`

[API Test Link]('https://hopp.sh/r/ZbeBs1wwHRan')

Input JSON format:
```
{"input_array": [-1, 2, -3, 1, 0, 3]}
```
