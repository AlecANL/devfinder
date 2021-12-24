import React from 'react'
import classnames from 'classnames'

import './button.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  ariaLabel?: string
  children: React.ReactNode
  action: 'default' | 'primary' | 'transparent'
}

const defaultProps = {
  action: 'default',
}

export function Button(props: IButtonProps & typeof defaultProps) {
  const { children, action, className, ariaLabel, ...otherProps } = props

  return (
    <button
      aria-label={ariaLabel}
      className={classnames('btn btn-active', className, {
        [`color-${action}`]: action,
      })}
      {...otherProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps
