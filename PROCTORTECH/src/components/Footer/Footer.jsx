import React from 'react';
import './Footer.css';
import Foot from './Foot';
import { RxInstagramLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className='footer_1'>
        {/* Left Side of the Footer */}
        <div className='footer_1_1'>
          <div className="header_logo">
            <div className='proto_logo'>
              <div className="proto_logo_inner"></div>
            </div>
            <h1>PROCTORTECH</h1>
          </div>

          <div className='footer_1_1_2'>
            <p>is an all-in-one exam provider offering the highest security
              and reliability</p>
          </div>

          <div className='footer_1_1_3'>
            <RxInstagramLogo size={30} />
            <CiLinkedin size={30} />
            <BsTwitterX size={30} />
            <RiFacebookBoxLine size={30} />
          </div>
        </div>

        {/* Right Side of the Footer */}
        <div className='footer_1_2'>
          <Foot className='footer_1_2_1'
            p='Product'
            p1='How it works'
            p2='Features'
            p3='Press info'
            p4='Pricing'
          />

          <Foot className='footer_1_2_2'
            p='Company'
            p1='About Us'
            p2='FAQs'
            p3='Testimonials'
            p4='Contact'
          />

          <Foot
            p='Utility'
            p1='Help Center'
            p2='Event'
            p3='Event'
            p4='Service'
          />
        </div>

        <hr /> {/* White line at the bottom */}
      </div>
    </>
  )
}

export default Footer;