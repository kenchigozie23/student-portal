import React from 'react'
import { Link } from 'react-scroll'
function NavLinked({href, link}) {
  return (
    <li className='list-none cursor-pointer mr-8'>
      <Link to={href} spy={true} smooth={true} duration={400} offset={-50} className='font-bold transition-all duration-300'>{link}</Link>
    </li>
  )
}

export default NavLinked