

import React from 'react'
import Link from 'next/link'
import {
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  return (
    <header className='header'>
      <NavItem>
        <Link href="">brows</Link>
      </NavItem>
      <NavItem>
        <Link href="">lashes</Link>
      </NavItem>
      <NavItem>
        <Link href="">face</Link>
      </NavItem>
      <NavItem>
        <Link href="">lips</Link>
      </NavItem>
      <NavItem>
        <Link href="">palettes</Link>
      </NavItem>
    </header>
  )
}

export default Header