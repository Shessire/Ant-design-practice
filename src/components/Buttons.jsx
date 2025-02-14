import { Button } from "antd";
import { useState } from 'react';

export default function Buttons() {
  const [loading, setLoading] = useState(false)

  function handleClick (e) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (
    <div>
        <Button color='pink' variant='filled' loading={loading} onClick={handleClick}>My First Button</Button>
    </div>
  )
}
