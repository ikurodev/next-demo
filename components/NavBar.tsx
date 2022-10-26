import React from 'react'
import { ActiveLink } from './ActiveLink'
import Styles from './NavBar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
]

export const NavBar = () => {
  return (
     <nav className={Styles['menu-container']}>
        {
          menuItems.map(({text, href}) => {
            return (
              <ActiveLink key={href} text={text} href={href}/>
            )
          })
        }
      </nav>
  )
}