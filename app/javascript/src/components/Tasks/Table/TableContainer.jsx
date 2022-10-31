import {Space, Tag} from 'antd';
import {Table as AntTable} from 'antd';
import React from 'react';


const TableContainer = ({category, data, handleTaskComplete, destroyTask, setEditTask}) => {

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: '50%',
            render: (text) => <a>{text}</a>
        }, {
            title: 'Due Date',
            dataIndex: 'duedate',
            key: 'duedate'
        }, {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button class="inline-flex items-center px-1 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
                                          onClick={()=> setEditTask(record)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                        </svg>
                    </button>

                    <button class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                                          onClick={()=> destroyTask(record)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </Space>
            )
        }, {
            title: 'Completed',
            key: 'completed',
            align: 'center',
            dataIndex: 'completed',
            render: (_, record) => (
                <input type="checkbox" class="border-gray-300 rounded h-5 w-5"
                    checked={
                        record.completed
                    }
                    onChange={
                        () => handleTaskComplete(record)
                    }/>
            )
        },
    ];

    return (
        <div class="w-full mx-auto mt-5 bg-white shadow-lg rounded-sm border border-gray-200 px-4">
            <header class="py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">
                    {category}</h2>
            </header>
            <AntTable columns={columns}
                dataSource={data}
                pagination={false}/>
        </div>
    )
};
export default TableContainer;
