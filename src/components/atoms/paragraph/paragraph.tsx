import React from 'react'

import './paragraph.css'

interface IParagraphProps {
  children: React.ReactNode
  className?: string
}

export function Paragraph(props: IParagraphProps) {
  const { children, className } = props

  return <p className={className}>{children}</p>
}
