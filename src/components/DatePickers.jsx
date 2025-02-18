import { DatePicker, TimePicker } from 'antd'
import React from 'react'

export default function DatePickers() {
  return (
    <div>
        <DatePicker picker='quarter'/>
        <DatePicker.RangePicker picker='month' />
        <TimePicker />
    </div>
  )
}
