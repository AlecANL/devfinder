import React from 'react'
import classnames from 'classnames'

import './heading.css'

interface IHeadingProps {
  children: React.ReactNode
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading(props: IHeadingProps) {
  const { children, type } = props
  const Headline = type

  return (
    <Headline
      className={classnames('heading', {
        [`heading-${type}`]: type,
      })}
    >
      {children}
    </Headline>
  )
}
