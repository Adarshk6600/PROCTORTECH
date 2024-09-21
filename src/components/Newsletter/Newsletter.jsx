import NavigationHeading from '../NavigationHeading/NavigationHeading'
import './Newsletter.css'
import React from 'react'
import { IoMdMail } from "react-icons/io";


const Newsletter = () => {
  return (
    <div className='searchBox'>
      <div className="searchBox_search">
        <div className="center_icon">
          <NavigationHeading name='newsletter' />
        </div>
        <div className='newsletter_heading'>
          <h1>Join Our</h1> <h1 className='newsletter'>Newsletter</h1>
        </div>
        <div className="search_input">
          <span><input type="text" placeholder='Enter Your Email Address' /> <IoMdMail size={20} /></span>
          <span className='newsletterButton'>
            <p>Subscribe</p>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
