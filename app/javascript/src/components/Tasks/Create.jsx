import React, {useState, useEffect} from "react";

import {Button, Modal} from 'antd';
import {useHistory} from "react-router-dom";

import tasksApi from "apis/tasks";

import Form from "./Form";

const Create = ({isCreateModalOpen, setIsCreateModalOpen}) => {

    const [title, setTitle] = useState("");
    const [duedate, setDuedate] = useState(new Date());
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async event => {
        try {
            await tasksApi.create({...event});
            setIsCreateModalOpen(false);
        } catch (error) {
            logger.error(error);
        }
    };
    return (
        <Modal open={isCreateModalOpen}
            onCancel={
                () => setIsCreateModalOpen(false)
            }
            footer={
                [
                    <Button form="create" key="create" htmlType="submit">
                        Submit
                    </Button>,
                    <Button type="primary" onClick={()=>{setIsCreateModalOpen(false)}}>
                        Cancel
                    </Button>
                ]
        }>
            <p>Add Task</p>
            <Form handleSubmit={handleSubmit}
                loading={loading}
                setTitle={setTitle}
                title={title}
                setCompleted={setCompleted}
                completed={completed}
                setDuedate={setDuedate}
                duedate={duedate}
                type="create"/>
        </Modal>

    );
};

export default Create;
