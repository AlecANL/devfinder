import React from 'react'
import classnames from 'classnames'

import { TableHead } from './table-head'
import { TableBody } from './table-body'

import './table.css'

interface ITableProps {
  children: React.ReactNode
  className?: string
}

export function Table(props: ITableProps) {
  const { children, className } = props

  return (
    <section className={classnames('table', className)}>{children}</section>
  )
}

Table.Head = TableHead
Table.Body = TableBody
