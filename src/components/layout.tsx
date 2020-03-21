import React, { ReactNode } from 'react'
import GlobalStyles from '../utils/global-styles'
import { Global } from '@emotion/core'
import Nav from './nav'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
