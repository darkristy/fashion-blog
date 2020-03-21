import React, { FC } from 'react'
import styled from '@emotion/styled'
import Routes from './routes'

const links = [
  { key: '', href: '/about', label: 'About' },
  { key: '', href: '/blog', label: 'Blog' },
  { key: '', href: '/collection', label: 'Collection' },
  { key: '', href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav: FC = () => {
  return (
    <NavWrapper>
      {links.map(({ key, href, label }) => (
        <Routes key={key} href={href} label={label} />
      ))}
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  & > .nav__item--link {
    text-decoration: none;
    cursor: pointer;
    margin-right: 20px;
    transition: all 0.3s ease 0s;
  }
  & > .nav__item--left {
    margin-right: auto;
  }
`
const Brand = styled.a`
  margin-right: auto;
`
