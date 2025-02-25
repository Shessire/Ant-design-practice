import Icon, { AppleFilled, BankTwoTone, LoadingOutlined, LogoutOutlined, PieChartFilled } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import React from 'react'

export default function Icons() {

  return (
    <div>
        <PieChartFilled style={{color:"purple", fontSize:100}}/>
        <AppleFilled style={{color:"green", fontSize:100}}/>
        <LoadingOutlined style={{color:"red", fontSize:100}}/>
        <PieChartFilled rotate={45} style={{color:"orange", fontSize:100}}/>
        <BankTwoTone twoToneColor="green" style={{fontSize:100}}/>
        <Divider />
        <Button icon={<LogoutOutlined style={{color:"red", fontSize:14}}/>}>Button with Custom Icon</Button>
        <Divider />
    </div>
  )
}
