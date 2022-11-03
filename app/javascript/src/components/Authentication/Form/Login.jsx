import React from "react";

import {Link} from "react-router-dom";

import { Button, Form, Input } from 'antd';

const Login = ({handleSubmit}) => {

    return (
        <div className="bg-gray-50 flex min-h-screen items-center
                                  justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="flex flex-col aligns-center">
                <h2 className="mt-6 text-center text-3xl font-extrabold
                                                      leading-9 text-bb-gray-700">
                    Sign In
                </h2>
                <div className="text-center">
                    <Link to="/signup" className="transition focus:outline-none mt-2 text-sm
                                                                font-medium text-bb-purple duration-150 ease-in-out
                                                                focus:underline">
                        Or Register Now
                    </Link>
                </div>
                </div>
                <Form
                    layout="vertical" 
                    name="basic"
                    labelCol={
                        {span: 8}
                    }
                    wrapperCol={
                        {span: 100}
                    }
                    initialValues={
                        {remember: true}
                    }
                    onFinish={handleSubmit}
                    autoComplete="off">
                    <Form.Item label="Email" name="email"
                        rules={
                            [{
                                    required: true,
                                    message: 'Please input your username!'
                                },]
                    }>
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Password" name="password"
                        rules={
                            [{
                                    required: true,
                                    message: 'Please input your password!'
                                },]
                    }>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={
                        {
                            span: 100
                        }
                    }>
                        <Button type="primary" htmlType="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default Login;
