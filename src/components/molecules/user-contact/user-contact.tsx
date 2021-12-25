import React from 'react'
import classnames from 'classnames'

import './user-contact.css'

interface IUserContactProps {
  children: React.ReactNode
  className?: string
}

export function UserContact(props: IUserContactProps) {
  const { children, className } = props

  return <div className={classnames('user-contact', className)}>{children}</div>
}
