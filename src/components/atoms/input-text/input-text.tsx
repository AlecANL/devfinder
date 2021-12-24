import React from 'react'
import classnames from 'classnames'

import './input-text.css'

interface IInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'search' | 'number'
  className?: string
}

export function InputText(props: IInputText) {
  const { type, className, ...otherProps } = props

  return (
    <input
      className={classnames('input', className)}
      type={type}
      {...otherProps}
    />
  )
}
