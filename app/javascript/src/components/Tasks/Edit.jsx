import React, {useState, useEffect} from "react";

import {Button, Modal} from 'antd';
import {useHistory} from "react-router-dom";

import tasksApi from "apis/tasks";

import Form from "./Form";

const Edit = ({isEditModalOpen, setIsEditModalOpen, id}) => {
    const [title, setTitle] = useState("");
    const [duedate, setDuedate] = useState(new Date());
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchTask = async () => {
      try {
        const {
          data: {task:
            {title, duedate, completed}},
        } = await tasksApi.show(id);
        setTitle(title);
        setDuedate(Date.parse(date));
        setCompleted(completed);
      } catch (error) {
        logger.error(error);
      }
    }
    const handleSubmit = async event => {
      try {
        console.log((event))
        await tasksApi.update({
          id, payload: {...event}
        });
        setIsEditModalOpen(false)
      } catch (error) {
        setLoading(false);
        logger.error(error);
      }
    };
    useEffect(() => {
      fetchTask();
    }, [id]);
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
                loading={loading}
                title={title}
                completed={completed}
                setDuedate={setDuedate}
                duedate={duedate}
                type="edit"/>
        </Modal>

    );
};

export default Edit;