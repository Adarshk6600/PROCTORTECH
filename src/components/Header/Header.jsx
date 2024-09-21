import './Header.css'
import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderMid from './HeaderMid/HeaderMid'
import HeaderBottom from './HeaderBottom/HeaderBottom'

const Header = () => {
  return (
    <div className='Header_section'>
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
    </div>
  )
}

export default Header
