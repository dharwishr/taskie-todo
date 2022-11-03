import React from "react";

import {Link} from "react-router-dom";

import {Button, Checkbox, Form, Input} from 'antd';

const Signup = ({handleSubmit}) => {

    return (
        <div className="bg-gray-50 flex min-h-screen items-cente justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="flex flex-col aligns-center">
                    <h2 className="mt-6 text-center text-3xl font-extrabold leading-9 text-bb-gray-700">
                        Sign Up
                    </h2>
                    <div className="text-center">
                        <Link to="/signup" className="transition focus:outline-none mt-2 text-sm font-medium text-bb-purple duration-150 ease-in-out focus:underline">
                            Or Login
                        </Link>
                    </div>
                </div>
                <Form layout="vertical" name="basic"
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
                    <Form.Item label="Name" name="name"
                        rules={
                            [{
                                    required: true,
                                    message: 'Please input your Name!'
                                },]
                    }>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Email" name="email"
                        rules={
                            [{
                                    required: true,
                                    message: 'Please input your email!'
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
                    <Form.Item label="Confirm Password" name="password_confirmation"
                        rules={
                            [{
                                    required: true,
                                    message: 'Please confirm your password!'
                                },]
                    }>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item wrapperCol={
                        {span: 100}
                    }>
                        <Button type="primary" htmlType="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default Signup;
