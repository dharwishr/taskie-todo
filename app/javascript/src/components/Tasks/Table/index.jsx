import React from 'react';
import tasksApi from "apis/tasks";
import TableContainer from './TableContainer'

const Table = ({allTasks, overdueTasks, completedTasks, fetchTasks, setIsEditModalOpen, setId}) => {

    const handleTaskComplete = async (record) => {
        try {
            await tasksApi.update({
                id: record.id,
                payload: {
                    completed: !record.completed
                },
                quiet: true,
            });
            fetchTasks()
        } catch (error) {
            logger.error(error);
        }
      };
  
      const destroyTask = async (record) => {
        try {
          await tasksApi.destroy({id: record.id});
          fetchTasks()
        } catch (error) {
          logger.error(error);
        }
      };

      const setEditTask = (record) => {
        setId(record.id);
        setIsEditModalOpen(true);
      };

      const tableProps = {
        handleTaskComplete,
        destroyTask,
        setEditTask
      };
    return (
        <>
            <TableContainer {...tableProps} category={"All"} key="All" 
                data={allTasks}/>
            <TableContainer {...tableProps} category={"Overdue"} key="Overdue" 
                data={overdueTasks}/>
            <TableContainer {...tableProps} category={"Completed"} key="Completed" 
                data={completedTasks}/>
        </>
    )
}
export default Table
