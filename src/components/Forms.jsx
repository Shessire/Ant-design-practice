import React from 'react'
import { Form, Input, Button } from 'antd'

export default function Forms() {
    const onFinish = (e) => {
        console.log(e)
    }

  return (
    <div>
        <Form onFinish={onFinish}>
            <Form.Item label="User Name" name="username">
                <Input placeholder='User name'></Input>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input.Password placeholder='Password'></Input.Password>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>Log In</Button>
            </Form.Item>
        </Form>
    </div>
  )
}
