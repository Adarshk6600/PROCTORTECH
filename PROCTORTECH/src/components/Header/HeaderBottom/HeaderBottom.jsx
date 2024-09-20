import './HeaderBottom.css'
import { samsungPay1, samsungPay2, aliPay, spherule, masterCard, masterCard2, amazonPay, payPal } from '../../../constants/index'
import React from 'react'

const HeaderBottom = () => {

  return (
    <div className='header_bottom_main'>
      <span className="payment_method_logo_wrapper">
        <img src={spherule} alt="Spherule" />
        <p>Spherule</p>
      </span>

      <span className="payment_method_logo_wrapper">
        <img src={samsungPay1} style={{ height: '60px ' }} alt="" />
        <img src={samsungPay2} style={{ height: '40px ' }} alt="" />
      </span>

      <span className="payment_method_logo_wrapper">
        <img src={amazonPay} style={{ height: '60px', marginTop: '20px' }} alt="" />
      </span>

      <span className='payment_method_logo_wrapper'>
        <img src={payPal} style={{ height: '60px', }} alt="" />
      </span>

      <span className='payment_method_logo_wrapper mastercard '>
        <img src={masterCard2} style={{ height: '50px' }} alt="" />
        <img src={masterCard} style={{ height: '50px', filter: 'invert(0%)' }} alt="" />
      </span>

      <span className='payment_method_logo_wrapper'>
        <img src={aliPay} style={{ height: '50px', marginTop: '15px' }} alt="" />
      </span>
    </div>
  )
}

export default HeaderBottom
