import { useState } from 'react'
import { Form, Input, Button, message, Alert } from 'antd'

export default function Forms() {
    const [showAlert, setShowAlert] = useState(false)
    const onFinish = (e) => {
        console.log(e)
        setShowAlert(true)
    }

  return (
    <div>
        {
            showAlert &&
            <Alert 
                type='error'
                message='Error'
                description="There was an error on login"
                closable
            />
        }
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
