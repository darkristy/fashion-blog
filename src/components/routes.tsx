import React, { FC } from 'react'
import { Link } from 'gatsby'

export interface RoutesProps {
  href: string
  label: string
}

const Routes: FC<RoutesProps> = ({ href, label }) => {
  return (
    <div>
      <Link to={href}>
        <span>{label}</span>
      </Link>
    </div>
  )
}

export default Routes
