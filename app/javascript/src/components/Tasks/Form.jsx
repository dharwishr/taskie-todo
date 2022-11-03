import React from "react";
import moment from 'moment';

import {Input, Checkbox, DatePicker} from 'antd';
import {Form as AntForm} from 'antd';

const Form = ({
    type,
    title,
    duedate,
    completed,
    handleSubmit
}) => {
    const [form] = AntForm.useForm();

    const dateFormat = 'DD-MM-YYYY';

    const submitHandler = async event => {
        await handleSubmit(event);
        form.resetFields();
    }
    form.setFieldsValue({title, duedate: moment(duedate), completed});
    return (

        <AntForm name="basic"
            id={type}
            form={form}
            labelCol={
                {span: 8}
            }
            wrapperCol={
                {span: 16}
            }
            initialValue={
                {
                    title: title,
                    completed: completed,
                    duedate: moment(duedate)
                }
            }
            onFinish={submitHandler}
            autoComplete="off">
            <AntForm.Item label="Title" name="title"
                rules={
                    [{
                            required: true,
                            message: 'Please input a title!'
                        }]
            }>
                <Input/>
            </AntForm.Item>
            <AntForm.Item label="Duedate" name="duedate">
                <DatePicker />
            </AntForm.Item>
            <AntForm.Item label="Completed" name="completed" valuePropName="checked">
                <Checkbox key="completed"></Checkbox>
            </AntForm.Item>
        </AntForm>
    );
};

export default Form;
