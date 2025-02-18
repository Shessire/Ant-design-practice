import { Button, Spin } from 'antd'
import React, { useState } from 'react'

export default function Spins() {
    const [toggle, setToggle] = useState(false)

    function handleToggle () {
        setToggle(prev => !prev)
    }
  return (
    <div>
        <Spin spinning={toggle}></Spin>
        <Button onClick={handleToggle}>Toggle Spinning</Button>
    </div>
  )
}
