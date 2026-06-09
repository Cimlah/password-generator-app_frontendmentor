import { useState } from 'react'
import type { ReactNode } from 'react'

type CheckboxParameters = {
  name: string
  labelFor?: string
  id?: string
  children: ReactNode
}

function Checkbox({ name, id, labelFor = id, children }: CheckboxParameters) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center gap-(--spacing-300)">
      <div
        // className={`relative w-5 h-5 border-2 border-(--color-white) flex items-center justify-center cursor-pointer ${checked ? 'bg-(--color-green-200) border-(--color-green-200)' : ''}`}
        className={`relative w-5 h-5 border-2 ${checked ? 'border-(--color-green-200)' : 'border-(--color-grey-200)'} flex items-center justify-center cursor-pointer ${checked ? 'bg-(--color-green-200)' : 'bg-transparent'}`}
        onClick={() => setChecked((v) => !v)}
      >
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={() => setChecked((v) => !v)}
          className="sr-only"
        />
        {checked && (
          <img
            src="/src/assets/icon-check.svg"
            alt=""
            aria-hidden="true"
          />
        )}
      </div>
      <label
        htmlFor={labelFor}
        className="text-(length:--font-size-preset-3) cursor-pointer"
      >
        {children}
      </label>
    </div>
  )
}

export default Checkbox
