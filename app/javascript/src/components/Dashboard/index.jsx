import React, {useState, useEffect} from "react";

import {Button} from 'antd';

import {all, isNil, isEmpty, either} from "ramda";

import tasksApi from "apis/tasks";
import NavBar from "components/NavBar";
import Table from "components/Tasks/Table";
import Edit from "components/Tasks/Edit"
import Create from "components/Tasks/Create"

const Dashboard = ({history}) => {
    const [allTasks, setAllTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [id, setId] = useState("")

    const fetchTasks = async () => {
        try {
            const {
                data: {
                    tasks: {
                        all,
                        overdue,
                        completed
                    }
                }
            } = await tasksApi.list();
            setAllTasks(all)
            setOverdueTasks(overdue);
            setCompletedTasks(completed);
        } catch (error) {
            console.log(error)
        } 
    };

    useEffect(() => {
        fetchTasks();
    }, [isCreateModalOpen, isEditModalOpen]);

    return (
        <div className="antialiased bg-gray-100 h-screen">
            <NavBar/>
            <div class="w-full max-w-3xl mx-auto mt-5 flex flex-col">
                <Button type="primary" className="w-1/4 float-right self-end"
                    onClick={
                        () => setIsCreateModalOpen(true)
                }>Add Task</Button>
                <Table fetchTasks={fetchTasks}
                    allTasks={allTasks}
                    overdueTasks={overdueTasks}
                    setIsEditModalOpen={setIsEditModalOpen}
                    completedTasks={completedTasks}
                    setId={setId}/>
            </div>
            <Create isCreateModalOpen={isCreateModalOpen} setIsCreateModalOpen={setIsCreateModalOpen}/>
            <Edit isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} id={id}/>
        </div>

    );
};

export default Dashboard;
