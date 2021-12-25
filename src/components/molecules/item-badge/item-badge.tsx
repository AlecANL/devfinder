import React from 'react'

import classnames from 'classnames'

import './item-badge.css'
import { Picture } from '../../atoms/picture'

interface IItemBadgeProps {
  src?: string
  alt?: string
  children: React.ReactNode
  className?: string
  title?: string
}

export function ItemBadge(props: IItemBadgeProps) {
  const { src, alt, children, className, ...otherProps } = props

  return (
    <li className={classnames('item-badge', className)} {...otherProps}>
      {src && alt && <Picture src={src} alt={alt} width={20} height={20} />}
      {children}
    </li>
  )
}
