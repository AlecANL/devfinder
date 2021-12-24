import React from 'react'

import './form.css'
import classnames from 'classnames'

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function Form(props: IFormProps) {
  const { children, ...otherProps } = props

  return (
    <form className={classnames('form')} {...otherProps}>
      {children}
    </form>
  )
}
