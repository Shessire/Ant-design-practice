import { Select } from 'antd'
import React from 'react'

export default function Selects() {
    const fruits = ['Bananas', 'Mangoes', 'Oranges', 'Cherries']

  return (
    <div>
        <h2>What is your favourite fruit?</h2>
        <Select 
            placeholder="Select fruit" 
            // defaultValue={fruits[0]}
            mode='multiple'
            maxTagCount={3}
            allowClear
            style={{ width:"50%" }}
        >
            {
                fruits.map((f, index) => (
                    <Select.Option key={index} value={f}>{f}</Select.Option>
                ))
            }
        </Select>
    </div>
  )
}
