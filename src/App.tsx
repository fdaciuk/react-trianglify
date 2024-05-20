import { useState } from "react"
import { Trianglify } from "react-trianglify"
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>React Trianglify</h1>
      <Trianglify seed={String(counter)} />
      <br />
      <button onClick={() => setCounter(c => c + 1)}>Click me ({counter})!</button>
    </>
  )
}

export default App
