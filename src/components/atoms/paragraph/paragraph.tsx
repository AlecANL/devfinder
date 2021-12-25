import React from 'react'

import './paragraph.css'
import classnames from 'classnames'

interface IParagraphProps {
  children: React.ReactNode
  className?: string
}

export function Paragraph(props: IParagraphProps) {
  const { children, className } = props

  return <p className={classnames('paragraph', className)}>{children}</p>
}
