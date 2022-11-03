import React, {useState, useEffect} from "react";

import {Button, Modal} from 'antd';

import tasksApi from "apis/tasks";

import Form from "./Form";

const Edit = ({isEditModalOpen, setIsEditModalOpen, id, fetchTasks}) => {
    const [title, setTitle] = useState("");
    const [duedate, setDuedate] = useState(new Date());
    const [completed, setCompleted] = useState(false);

    const dayjs = require('dayjs');

    const fetchTask = async () => {
      try {
        const {
          data: {task:
            {title, duedate, completed}},
        } = await tasksApi.show(id);
        setTitle(title);
        setDuedate(new Date(duedate));
        setCompleted(completed);
      } catch (error) {
        logger.error(error);
      }
    }

    const handleSubmit = async event => {
      try {
        await tasksApi.update({
          id, payload: {...event}
        });
        setIsEditModalOpen(false)
        fetchTasks()
      } catch (error) {
        logger.error(error);
      }
    };

    

    useEffect(() => {
      isEditModalOpen ? fetchTask() : null
    }, [isEditModalOpen]);

    return (
        <Modal open={isEditModalOpen}
            onCancel={
                () => setIsEditModalOpen(false)
            }
            footer={
                [
                    <Button form="edit" key="edit" htmlType="submit">
                        Submit
                    </Button>,
                    <Button type="primary" onClick={()=>{setIsEditModalOpen(false)}}>
                        Cancel
                    </Button>
                ]
        }>
            <p>Edit Task</p>
            <Form handleSubmit={handleSubmit}
                title={title}
                completed={completed}
                duedate={duedate}
                type="edit"/>
        </Modal>

    );
};

export default Edit;