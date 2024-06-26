"use client";
import React from "react";
import { Button, Checkbox, Form, Input, message } from 'antd';
import type { FormProps } from 'antd';
import { login } from "@/utils/auth";
import { useRouter } from "next/navigation";

interface Props {}

type FieldType = {
    username: string;
    password: string;
    remember: boolean;
};

const LoginPage: React.FC<Props> = () => {
    const router = useRouter()

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
            const response = await login(values.username, values.password, values.remember)

            if (response.status === 201) {
                return router.push("/")
            }

            message.error("Login failed. Please check your credentials.");
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = async (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{ maxWidth: '50%', margin: 'auto', padding: '50px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Login</h2>
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >            
            
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    style={{textAlign:'center'}}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item style={{textAlign:'center'}}>
                    <Button type="primary" htmlType="submit" style={{ width: '50%' }}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
