import trianglify from "trianglify"
import { Trianglify } from "react-trianglify"
import './App.css'

function App() {
  return (
    <>
      <h1>React Trianglify</h1>
      <Trianglify
        key={Math.random()}
        colorFunction={trianglify.colorFunctions.shadows(0.5)}
        palette={trianglify.utils.colorbrewer}
      />
    </>
  )
}

export default App
