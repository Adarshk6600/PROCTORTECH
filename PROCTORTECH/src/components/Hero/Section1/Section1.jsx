import Button from '../../Button/Button';
import NavigationHeading from '../../NavigationHeading/NavigationHeading'
import Card from '../Card/Card'
import './Section1.css'
import React from 'react'
import { PiShieldCheckFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";




const Section1 = () => {
  return (
    <div className='hero_section_one'>
      <NavigationHeading name='Awesome Benefit From Us' />
      <div className="hero_heading">
        <p className='section_one_heading' >Secure & Streamlined Exam - Features Of - </p> <span><p className='section_one_heading_color' >Proctortech</p></span>
      </div>
      <div className="hero_card_wrapper">
        <div className="card1">
          <span className='card_logo'>
            <PiShieldCheckFill size={40} style={{ color: 'white' }} />
          </span>
          <h1>Unbreakable Security</h1>
          <p>Lock down exams with high advanced security measures to prevent cheating</p>
          <Button name='Read More' background='transparent' />
        </div>

        <Card>
          <span className='card_logo' style={{ background: 'white' }}>
            <RiMessage2Fill size={40} color='rgb(160, 207, 21)' />
          </span>
          <h1>AI Proctoring Assistant</h1>
          <p>Our Ai Monitors Exams, Freeing Up Human Proctors For Focused Attention</p>
          <Button name='Read More' background='transparent' />
        </Card>

        <div className="card1">
          <span className='card_logo'>
            <IoNewspaperOutline size={40} style={{ color: 'white' }} />
          </span>
          <h1>AI Proctoring Assistant</h1>
          <p>Our Ai Monitors Exams, Freeing Up Human Proctors For Focused Attention</p>
          <Button name='Read More' background='transparent' />
        </div>

      </div>
    </div>
  )
}

export default Section1
