import { Slider } from './components'
import './App.css'
import { useState } from 'react'

function App() {
  const [characterLength, setCharacterLength] = useState<number>(10)

  return (
    <>
      <h1>yes</h1>
      <Slider
        characterLength={characterLength}
        setCharacterLength={setCharacterLength}
      />
    </>
  )
}

export default App
