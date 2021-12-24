import React from 'react'

import './wrapper.css'

interface IWrapperProps {
  children: React.ReactNode
}

export function Wrapper(props: IWrapperProps) {
  const { children } = props

  return <div className='wrapper'>{children}</div>
}
