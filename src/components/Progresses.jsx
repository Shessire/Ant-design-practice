import { Progress } from 'antd'
import React from 'react'

export default function Progresses() {
  return (
    <div>
        <Progress percent={33} />
        <Progress percent={33} type="circle" strokeColor="green"/>
        <Progress percent={33} type="line" strokeColor="magenta" strokeWidth={15} status='active'/>
        <Progress percent={33} type="line" steps={3}/>
    </div>
  )
}
