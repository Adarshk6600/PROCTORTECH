import React from 'react';
import './Footer.css';
import Foot from './Foot';
import { RxInstagramLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footer'>
      {/* Left Side of the Footer */}
      <div className='footer__left'>
        <div className="footer__logo">
          <img src='../../../public/logo size.png' alt="Logo" /> <h2>PROCTORTECH</h2>
        </div>

        <div className='footer__description'>
          <p>is an all-in-one exam provider offering the highest security and reliability</p>
        </div>

        <div className='footer__socials'>
          <RxInstagramLogo size={30} />
          <CiLinkedin size={30} />
          <BsTwitterX size={30} />
          <RiFacebookBoxLine size={30} />
        </div>
      </div>

      {/* Right Side of the Footer */}
      <div className='footer__right'>
        <Foot className='footer__links footer__links--product'
          p='Product'
          p1='How it works'
          p2='Features'
          p3='Press info'
          p4='Pricing'
        />

        <Foot className='footer__links footer__links--company'
          p='Company'
          p1='About Us'
          p2='FAQs'
          p3='Testimonials'
          p4='Contact'
        />

        <Foot className='footer__links footer__links--utility'
          p='Utility'
          p1='Help Center'
          p2='Event'
          p3='Event'
          p4='Service'
        />
      </div>
    </div>
  );
}

export default Footer;
