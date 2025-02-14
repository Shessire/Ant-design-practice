import { Input } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

export default function Inputs() {
  return (
    <div>
        <Input.Search
            placeholder='Name'
            maxLength={20}
            prefix={<UserOutlined />}
            allowClear
        >
        </Input.Search>
    </div>
  )
}
