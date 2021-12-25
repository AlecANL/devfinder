import React from 'react'
import classnames from 'classnames'

import { Paragraph } from './components/atoms/paragraph/paragraph'
import { InputText } from './components/atoms/input-text'
import { Ellipsis } from './components/atoms/ellipsis'
import { Picture } from './components/atoms/picture'
import { Heading } from './components/atoms/heading'
import { Loading } from './components/atoms/loading'
import { Button } from './components/atoms/button'

import { UserContact } from './components/molecules/user-contact'
import { ItemBadge } from './components/molecules/item-badge'
import { NotFound } from './components/molecules/not-found'
import { Form } from './components/molecules/form/form'
import { Header } from './components/molecules/header'
import { Table } from './components/molecules/table'

import { Wrapper } from './components/layout/wrapper'
import { Container } from './components/layout/container'

import { useDarkMode } from './hooks/useDarkMode'

import { getUserToGithub } from './service/user.service'

import { convertNumber } from './utils/convertNumber'
import { formatDate } from './utils/formatDate'

import { userMocks } from './mocks/user.mock'

import { IAppState } from './interfaces/user.interface'

import { tableHeaders } from './constants'

import MoonIcon from './assets/icons/icon-moon.svg'
import SunIcon from './assets/icons/icon-sun.svg'
import CompanyIcon from './assets/icons/icon-company.svg'
import SearchIcon from './assets/icons/icon-search.svg'
import LocationIcon from './assets/icons/icon-location.svg'
import TwitterIcon from './assets/icons/icon-twitter.svg'
import WebsiteIcon from './assets/icons/icon-website.svg'

import './app.css'

function App() {
  const { theme, isDarkMode, handleToggleTheme } = useDarkMode()
  const [isFormValid, setFormValid] = React.useState<boolean>(true)
  const [state, setState] = React.useState<IAppState>({
    user: userMocks[1],
    isError: false,
    isLoading: false,
    message: 'initial State',
  })

  async function handleAdd(value: string) {
    if (!value) {
      setFormValid(false)
      return
    }
    try {
      setState({ ...state, isLoading: true })
      setFormValid(true)
      const user = await getUserToGithub(value)
      setState({ ...state, isLoading: false, user })
    } catch (error) {
      setState({
        ...state,
        isError: true,
        user: null,
        message: 'user cannot find',
      })
      return
    }
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = event.currentTarget.search.value
    handleAdd(value)
  }

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
          <Form onSubmit={handleSubmit}>
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
            {!isFormValid && (
              <span
                style={{
                  color: 'red',
                  position: 'absolute',
                  insetInlineEnd: '20%',
                }}
              >
                Please enter a valid name
              </span>
            )}
            <Button action='primary'>search</Button>
          </Form>
          <main className='main'>
            {!state.user && !state.isLoading && <NotFound />}
            {state.isLoading && <Loading />}
            {!state.isLoading && state.user && (
              <>
                <Picture
                  className='avatar'
                  width={70}
                  height={70}
                  src={state.user.avatar_url}
                  alt={state.user.name}
                />
                <Container className='user'>
                  <div className='user-profile'>
                    <div className='u-info'>
                      <Heading type='h2'>{state.user.name}</Heading>
                      <a
                        rel='noreferrer'
                        target='_blank'
                        className='nick'
                        href={`https://github.com/${state.user.login}`}
                      >
                        @{state.user.login}
                      </a>
                      <span className='date'>
                        joined {formatDate(new Date(state.user.created_at))}
                      </span>
                    </div>
                    <div className='bio'>
                      <Paragraph>{state.user.bio}</Paragraph>
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
                        {convertNumber(state.user.public_repos, 1)}
                      </span>
                      <span className='font-bold sm:text-2xl'>
                        {convertNumber(state.user.followers, 1)}
                      </span>
                      <span className='font-bold sm:text-2xl'>
                        {convertNumber(state.user.following, 1)}
                      </span>
                    </Table.Body>
                  </Table>
                  <UserContact>
                    <ul>
                      {state.user.location && (
                        <ItemBadge
                          title={state.user.location}
                          src={LocationIcon}
                          alt='icon location'
                        >
                          <Ellipsis>{state.user.location}</Ellipsis>
                        </ItemBadge>
                      )}
                      {state.user.blog && (
                        <ItemBadge
                          title={state.user.blog}
                          src={WebsiteIcon}
                          alt='website icon'
                        >
                          <Ellipsis>
                            <a
                              rel='noreferrer'
                              target='_blank'
                              href={state.user.blog}
                            >
                              {state.user.blog}
                            </a>
                          </Ellipsis>
                        </ItemBadge>
                      )}

                      <ItemBadge
                        title={state.user.twitter_username}
                        src={TwitterIcon}
                        alt='twitter icon'
                      >
                        <a
                          rel='noreferrer'
                          target='_blank'
                          href={`${
                            state.user.twitter_username
                              ? `https://twitter.com/${state.user.twitter_username}`
                              : '#'
                          }`}
                        >
                          <Ellipsis>
                            {`${
                              state.user.twitter_username
                                ? `@${state.user.twitter_username}`
                                : 'not available'
                            }`}
                          </Ellipsis>
                        </a>
                      </ItemBadge>

                      {state.user.company && (
                        <ItemBadge
                          title={state.user.company}
                          src={CompanyIcon}
                          alt='company icon'
                        >
                          <Ellipsis>{state.user.company}</Ellipsis>
                        </ItemBadge>
                      )}
                    </ul>
                  </UserContact>
                </Container>
              </>
            )}
          </main>
        </Wrapper>
      </div>
    </div>
  )
}

export default App
