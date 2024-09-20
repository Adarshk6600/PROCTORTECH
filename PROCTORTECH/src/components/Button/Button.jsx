import './Button.css'
import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";


const Button = (props) => {

  const [btnhover, setBtnHover] = useState(false)
  const onBtnHover = () => {
    setBtnHover(true)
  }
  const onMouseOutHandle = () => {
    setBtnHover(false)
  }

  return (
    <div onMouseOver={onBtnHover} onMouseOut={onMouseOutHandle} className='mainButton' style={{ background: props.background, color: props.color }}>
      <p>{props.name}</p>
      <span className='mainBtnIcon'>{props.icon || <GoArrowRight className={btnhover ? 'secondBtnHover' : ''} style={{ color: 'black', fontWeight: 'bolder' }} />
      }</span>
    </div>
  )
}

export default Button
