import Button from '../../Button/Button'
import './HeaderTop.css'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const HeaderTop = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleActiveMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="header_top_container">
      <div className="header_logo">
        <div className='proto_logo'>
          <div className="proto_logo_inner"></div>
        </div>
        <h1>PROCTORTECH</h1>
      </div>

      <div className="nav_links">
        <a href=""><li>Home</li></a>
        <a href=""><li>Product</li></a>
        <a href=""><li>Pricing</li></a>
        <a href=""><li>Resourses</li></a>
      </div>

      <div className="nav_buttons">
        <Button name='Book a Demo' />
        <Button name='Log In' background='transparent' color='white' />
      </div>

      <div className="hamburgerButton">
        <GiHamburgerMenu onClick={handleActiveMenu} size={50} />

        <div className={showMenu ? 'avtiveHamburger' : 'inactiveHumburger'}>

          <div className="nav_links_active">
            <a href=""><li>Home</li></a>
            <a href=""><li>Product</li></a>
            <a href=""><li>Pricing</li></a>
            <a href=""><li>Resourses</li></a>
          </div>

          <div className="hamburgerMenu">
            <Button name='Book a Demo' />
            <Button name='Log In' background='transparent' color='white' />
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeaderTop
