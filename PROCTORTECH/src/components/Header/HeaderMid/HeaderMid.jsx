import NavigationHeading from '../../NavigationHeading/NavigationHeading'
import './HeaderMid.css'
import React from 'react'
import Button from '../../Button/Button'
import { IoIosCall } from "react-icons/io";

const HeaderMid = () => {
  return (
    <div className='headermid_main'>
      <NavigationHeading name='Welcome to Proctor' />
      <div className='Proctor_main_heading'>
        <div className='proctor_heading_wrapper'>
          <h1 className='proctor_heading_colored'>
            PROCTOR
          </h1>
          <h1>
            EXAMS
          </h1>
        </div>
        <div className='proctor_heading_wrapper'>
          <h1>
            ANYWHERE
          </h1>
          <h1 className='proctor_heading_colored'>
            ANYTIME
          </h1>
        </div>
      </div>

      <div className="header_mid_description">
        <p>
          ProctorTech Provides Secure, AI-Powered Proctoring To SafeGuard Exam
          Integrity
        </p>
      </div>

      <div className="header_mid_button_container">
        <Button name='Book a Demo' />
        <Button name='Call Now' icon={<IoIosCall style={{ color: 'black', rotate: '30deg' }} size={18} />} background='transparent' color='white' />
      </div>

    </div>
  )
}

export default HeaderMid
