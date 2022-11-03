import {Space, Tag} from 'antd';
import {Table as AntTable} from 'antd';
import React from 'react';


const TableContainer = ({
    category,
    data,
    handleTaskComplete,
    destroyTask,
    setEditTask
}) => {

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
                        onClick={
                            () => setEditTask(record)
                    }>
                        <svg width="24" strokeWidth="1" class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    <button class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                        onClick={
                            () => destroyTask(record)
                    }>
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
                pagination={false}
                rowKey={record => record.id}/>
        </div>
    )
};
export default TableContainer;
