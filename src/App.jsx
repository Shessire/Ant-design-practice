import { useState } from 'react';
import './App.css'
import { Button } from "antd";

function App() {
  const [loading, setLoading] = useState(false)

  function handleClick (e) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (
    <>
    <Button color='pink' variant='filled' loading={loading} onClick={handleClick}>My First Button</Button>
    </>
  )
}

export default App
