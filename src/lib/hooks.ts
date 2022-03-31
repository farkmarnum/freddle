import { useEffect } from 'react'

export const useVhUnits = (): void => {
  const updateVhUnits = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  }

  useEffect(() => {
    updateVhUnits()

    window.addEventListener('resize', updateVhUnits)
    return () => {
      window.removeEventListener('resize', updateVhUnits)
    }
  })
}
