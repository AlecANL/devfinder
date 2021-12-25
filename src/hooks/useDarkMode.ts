import React from 'react'

export function useDarkMode() {
  const [theme, setTheme] = React.useState<string>('dark')
  const [isDarkMode, setDarkMode] = React.useState<boolean>(true)

  React.useEffect(() => {
    const mqList = window.matchMedia('(prefers-color-scheme: dark)')
    mqList.addEventListener('change', handleMatchMedia)
    setDarkMode(mqList.matches)
    saveToStorage(mqList.matches)
    return () => {
      mqList.removeEventListener('change', handleMatchMedia)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function saveToStorage(isDark: boolean) {
    const themeChanged = !isDark ? 'light' : 'dark'
    setTheme(themeChanged)
    localStorage.setItem('theme', themeChanged)
  }

  function handleToggleTheme() {
    const x = !isDarkMode
    setDarkMode(x)
    const theme = x
    saveToStorage(theme)
  }

  function handleMatchMedia(mqList: MediaQueryListEvent) {
    setDarkMode(mqList.matches)
    saveToStorage(mqList.matches)
  }

  return {
    handleToggleTheme,
    theme,
    isDarkMode,
  }
}
