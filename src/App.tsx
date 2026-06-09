import { Checkbox, Slider, StrengthStates } from './components'
import './App.css'
import { useState } from 'react'

function App() {
  const [characterLength, setCharacterLength] = useState<number>(10)
  const [passwordComplexityCheck, setPasswordComplexityCheck] = useState<'tooWeak' | 'weak' | 'medium' | 'strong'>(
    'medium'
  )

  return (
    <>
      <Slider
        characterLength={characterLength}
        setCharacterLength={setCharacterLength}
      />

      <div className="mb-16"></div>
      <StrengthStates state={passwordComplexityCheck} />

      <div className="mb-16"></div>
      <Checkbox name="what">Yes</Checkbox>
    </>
  )
}

export default App
