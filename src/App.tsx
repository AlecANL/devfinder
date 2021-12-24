import React from 'react'

import { InputText } from './components/atoms/input-text'
import { Picture } from './components/atoms/picture'
import { Heading } from './components/atoms/heading'
import { Button } from './components/atoms/button'

import { Form } from './components/molecules/form/form'
import { Header } from './components/molecules/header'

import { Wrapper } from './components/layout/wrapper'

import MoonIcon from './assets/icons/icon-moon.svg'
import SunIcon from './assets/icons/icon-sun.svg'
import SearchIcon from './assets/icons/icon-search.svg'

import './app.css'
import classnames from 'classnames'

function App() {
  const [theme, setTheme] = React.useState<string>('dark')
  const [isDarkMode, setDarkMode] = React.useState<boolean>(true)

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

  console.log(theme)

  return (
    <div className={classnames('app', theme)}>
      <Wrapper>
        <Header>
          <Heading type='h1'>devfinder</Heading>
          <Button onClick={handleToggleTheme}>
            <span>{isDarkMode ? 'light' : 'dark'}</span>
            <Picture
              src={!isDarkMode ? MoonIcon : SunIcon}
              alt='icon to dark'
              width={20}
              height={20}
            />
          </Button>
        </Header>
        <Form>
          <Picture src={SearchIcon} alt='icon search' width={24} height={24} />
          <InputText
            name='search'
            id='search'
            placeholder='Search GitHub username…'
            type='search'
          />
          <Button action='primary'>search</Button>
        </Form>
      </Wrapper>
    </div>
  )
}

export default App
