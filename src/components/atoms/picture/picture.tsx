import React from 'react'
import classnames from 'classnames'

import './picture.css'

interface IPictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function Picture(props: IPictureProps) {
  const { src, alt, className, ...otherProps } = props

  return (
    <picture className={classnames('picture', className)}>
      <img src={src} alt={alt} {...otherProps} />
    </picture>
  )
}
