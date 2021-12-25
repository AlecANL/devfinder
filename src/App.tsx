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
import CompanyIcon from './assets/icons/icon-company.svg'
import SearchIcon from './assets/icons/icon-search.svg'
import LocationIcon from './assets/icons/icon-location.svg'
import TwitterIcon from './assets/icons/icon-twitter.svg'
import WebsiteIcon from './assets/icons/icon-website.svg'

import classnames from 'classnames'
import { Container } from './components/layout/container'
import { userMocks } from './mocks/user.mock'
import { IUser } from './interfaces/user.interface'
import { Paragraph } from './components/atoms/paragraph/paragraph'
import { Table } from './components/molecules/table'
import { UserContact } from './components/molecules/user-contact'

import './app.css'
import { ItemBadge } from './components/molecules/item-badge'
import { Ellipsis } from './components/atoms/ellipsis'
import { convertNumber } from './utils/convertNumber'

const tableHeaders = ['repos', 'followers', 'following']

function App() {
  const [theme, setTheme] = React.useState<string>('dark')
  const [isDarkMode, setDarkMode] = React.useState<boolean>(true)

  const [user] = React.useState<IUser>(userMocks[1])

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

  return (
    <div className={classnames('app', theme)}>
      <div className='app-content'>
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
            <Picture
              src={SearchIcon}
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
          <main className='main'>
            <Picture
              className='avatar'
              width={70}
              height={70}
              src={user.avatar_url}
              alt={user.name}
            />
            <Container className='user'>
              <div className='user-profile'>
                <div className='u-info'>
                  <Heading type='h2'>{user.name}</Heading>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    className='nick'
                    href={`https://github.com/${user.login}`}
                  >
                    @{user.login}
                  </a>
                  {/* <span className='nick'></span> */}
                  <span className='date'>joined 25 jan 2011</span>
                </div>
                <div className='bio'>
                  <Paragraph>{user.bio}</Paragraph>
                </div>
              </div>
              <Table className='user-followers'>
                <Table.Head>
                  {tableHeaders.map(header => (
                    <span key={header}>{header}</span>
                  ))}
                </Table.Head>
                <Table.Body>
                  <span className='font-bold sm:text-2xl'>
                    {convertNumber(user.public_repos, 1)}
                  </span>
                  <span className='font-bold sm:text-2xl'>
                    {convertNumber(user.followers, 1)}
                  </span>
                  <span className='font-bold sm:text-2xl'>
                    {convertNumber(user.following, 1)}
                  </span>
                </Table.Body>
              </Table>
              <UserContact>
                <ul>
                  {user.location && (
                    <ItemBadge src={LocationIcon} alt='icon location'>
                      <Ellipsis>{user.location}</Ellipsis>
                    </ItemBadge>
                  )}
                  {user.blog && (
                    <ItemBadge src={WebsiteIcon} alt='website icon'>
                      <a rel='noreferrer' target='_blank' href={user.blog}>
                        <Ellipsis>{user.blog}</Ellipsis>
                      </a>
                    </ItemBadge>
                  )}
                  <ItemBadge src={TwitterIcon} alt='twitter icon'>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      href={`${
                        user.twitter_username
                          ? `https://twitter.com/${user.twitter_username}`
                          : '#'
                      }`}
                    >
                      <Ellipsis>
                        {`${
                          user.twitter_username
                            ? user.twitter_username
                            : 'not available'
                        }`}
                      </Ellipsis>
                    </a>
                  </ItemBadge>
                  {user.company && (
                    <ItemBadge src={CompanyIcon} alt='company icon'>
                      <Ellipsis>{user.location}</Ellipsis>
                    </ItemBadge>
                  )}
                </ul>
              </UserContact>
            </Container>
          </main>
        </Wrapper>
      </div>
    </div>
  )
}

export default App
