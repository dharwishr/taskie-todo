import React from "react";
import DatePicker from "react-datepicker";
import {Input, Button, Checkbox} from 'antd';
import {Form as AntForm} from 'antd';

const Form = ({
    type,
    title,
    duedate,
    setDuedate,
    completed,
    handleSubmit
}) => {
    const [form] = AntForm.useForm();

    const submitHandler = async event => {
        await handleSubmit(event);
        form.resetFields();
    }
    form.setFieldsValue({title, duedate, completed});
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
                    duedate: duedate
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
                <DatePicker selected={duedate}
                    dateFormat="dd/M/yyyy"

                    onChange={
                        (date) => setDuedate(date)
                    }/>
            </AntForm.Item>
            <AntForm.Item label="Completed" name="completed" valuePropName="checked">
                <Checkbox key="completed"></Checkbox>
            </AntForm.Item>
        </AntForm>
    );
};

export default Form;
