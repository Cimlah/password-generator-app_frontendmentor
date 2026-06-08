import './Slider.css'
import type { SliderParameters } from '../types/index'

function Slider({ characterLength, setCharacterLength }: SliderParameters) {
  return (
    <>
      <div className="w-fit flex flex-col gap-(--spacing-200)">
        <div className="flex justify-between items-center">
          <span className="text-(length:--font-size-preset-3)">Character length</span>
          <span className="text-(length:--font-size-preset-1) text-(--color-green-200)">{characterLength}</span>
        </div>

        <input
          min={1}
          max={20}
          value={characterLength}
          type="range"
          onChange={(e) => setCharacterLength(Number(e.currentTarget.value))}
        />
      </div>
    </>
  )
}

export default Slider
