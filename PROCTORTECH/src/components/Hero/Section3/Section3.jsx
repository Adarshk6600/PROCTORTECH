import Button from '../../Button/Button';
import NavigationHeading from '../../NavigationHeading/NavigationHeading'
import ActiveCard from './ActiveCArd/ActiveCard';
import './Section3.css'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";


const Section3 = () => {
  return (
    <div className='pricing_main'>
      <NavigationHeading name='Pricing' />
      <div className="pricing_wrapper">
        <div className="pricing_left_section">
          <div className="pricing_plan">
            <p>Simple and Cool</p> <p>Pricing</p> <p>Plans</p>
          </div>
          <div className="plans">
            <p>we have several powerful plans to showcase your business and get discovered as a creative entrepreneurs. Everything you need.</p>
            <div className='toggle_switch'>
              <p className='bill_monthly'> Bill Monthly </p> <span>
                <input className='input_toggle' type="checkbox" />
              </span>
              <p>Bill Annually</p>
            </div>
          </div>
          <div className="trial_box">
            <span><FaCircleCheck color='var(--MainColor)' size={20} /> <p>Free 1 month trial for new user</p> </span>
            <span><FaCircleCheck color='var(--MainColor)' size={20} /> <p>Cancel Payment Anytime you want</p> </span>
            <span className='left_section_btn'><Button name='Full Pricing Comparison' background='transparent' /></span>
          </div>
        </div>
        <div className="pricing_right_section">
          <ActiveCard name='Intro' />
          <ActiveCard name='Base' />
          <ActiveCard name='Pro' />
          <ActiveCard name='Enterprise' />
        </div>
      </div>
      <div className="section_three_btn">
        <Button name='Start Free Trail' />
        <Button name='See a Demo' background='transparent' />
      </div>
    </div>
  )
}

export default Section3
