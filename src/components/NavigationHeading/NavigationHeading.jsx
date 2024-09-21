
import './NavigationHeading.css'
import React from 'react'
import { ImFire } from "react-icons/im";


const NavigationHeading = (props) => {
  return (
    <div className='navigation_heading'>
      <ImFire style={{ color: 'red' }} />  <p>{props.name}</p>
    </div>
  )
}

export default NavigationHeading
