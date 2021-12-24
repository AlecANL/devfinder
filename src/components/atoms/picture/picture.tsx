import React from 'react'
import classnames from 'classnames'

import './picture.css'

interface IPictureProps extends React.ImgHTMLAttributes<HTMLPictureElement> {
  src: string
  alt: string
  width?: number
  height?: number
}

export function Picture(props: IPictureProps) {
  const { src, alt, ...otherProps } = props

  return (
    <picture className={classnames('picture')} {...otherProps}>
      <img src={src} alt={alt} />
    </picture>
  )
}
