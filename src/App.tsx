import { Button } from './components/atoms/button'
import { Heading } from './components/atoms/heading'
import { Picture } from './components/atoms/picture'
import { Wrapper } from './components/layout/wrapper'
import { Header } from './components/molecules/header'

import MoonIcon from '../public/icons/icon-moon.svg'
import SunIcon from '../public/icons/icon-sun.svg'
import { Form } from './components/molecules/form/form'
import { InputText } from './components/atoms/input-text'
import React from 'react'

function App() {
  const [theme, setTheme] = React.useState<string>('')
  const [isDarkMode, setDarkMode] = React.useState<boolean>(true)

  const icon = isDarkMode ? SunIcon : MoonIcon

  function handleToggleTheme() {}

  return (
    <>
      <Wrapper>
        <Header>
          <Heading type='h1'>devfinder</Heading>
          <Button onClick={handleToggleTheme}>
            <span>{!isDarkMode ? 'dark' : 'light'}</span>
            <Picture src={icon} alt='icon to dark' width={20} height={20} />
          </Button>
        </Header>
        <Form>
          <Picture
            src='/icons/icon-search.svg'
            alt='icon search'
            width={24}
            height={24}
          />
          <InputText
            name='search'
            id='search'
            placeholder='Search GitHub username…'
            type='search'
          />
          <Button action='primary'>search</Button>
        </Form>
      </Wrapper>
    </>
  )
}

export default App
