type StrengthStatesParameters = {
  state: 'tooWeak' | 'weak' | 'medium' | 'strong'
}

function StrengthStates({ state }: StrengthStatesParameters) {
  type parametersType = {
    text: 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG'
    color: '--color-red-500' | '--color-orange-400' | '--color-yellow-300' | '--color-green-200'
    fill: 1 | 2 | 3 | 4
  }

  const parameters: parametersType = (() => {
    switch (state) {
      case 'tooWeak':
        return {
          color: '--color-red-500',
          fill: 1,
          text: 'TOO WEAK!',
        }

        break

      case 'weak':
        return {
          color: '--color-orange-400',
          fill: 2,
          text: 'WEAK',
        }

        break

      case 'medium':
        return {
          color: '--color-yellow-300',
          fill: 3,
          text: 'MEDIUM',
        }

        break

      default:
        return {
          color: '--color-green-200',
          fill: 4,
          text: 'STRONG',
        }
    }
  })()

  return (
    <>
      <div className="w-fit flex items-center justify-between">
        <span className="text-center text-(length:--font-size-preset-3) text-(--color-grey-600)">STRENGTH</span>
        <div className="flex items-center gap-(--spacing-200)">
          <span className="text-(length:--font-size-preset-2) text-(--color-grey-200)">{parameters.text}</span>
          <div className="flex items-center gap-(--spacing-100)">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[10px] h-[28px]"
                style={{
                  border: `2px solid ${i <= parameters.fill ? `var(${parameters.color})` : 'var(--color-grey-200)'}`,
                  backgroundColor: i <= parameters.fill ? `var(${parameters.color})` : 'transparent',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default StrengthStates
