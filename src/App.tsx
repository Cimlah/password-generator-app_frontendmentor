import { Slider, StrengthStates } from './components'
import './App.css'
import { useState } from 'react'

function App() {
  const [characterLength, setCharacterLength] = useState<number>(10)
  const [passwordComplexityCheck, setPasswordComplexityCheck] = useState<'tooWeak' | 'weak' | 'medium' | 'strong'>(
    'medium'
  )

  return (
    <>
      <h1>yes</h1>
      <Slider
        characterLength={characterLength}
        setCharacterLength={setCharacterLength}
      />
      <div className="mb-16">yeah</div>
      <StrengthStates state={passwordComplexityCheck} />
    </>
  )
}

export default App
