import React from 'react'
import classnames from 'classnames'

import './picture.css'

interface IPictureProps extends React.ImgHTMLAttributes<HTMLPictureElement> {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function Picture(props: IPictureProps) {
  const { src, alt, className, ...otherProps } = props

  return (
    <picture className={classnames('picture', className)} {...otherProps}>
      <img src={src} alt={alt} />
    </picture>
  )
}
