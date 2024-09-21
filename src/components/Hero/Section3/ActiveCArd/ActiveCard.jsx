import './ActiveCard.css'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoChevronDownCircle } from "react-icons/io5";

import React, { useState } from 'react'

const ActiveCard = (children) => {
  const [activeMenu, setctiveMenu] = useState(false)

  const handleActiveCardMenu = () => {
    setctiveMenu(prev => !prev)
  }

  return (
    <div className={activeMenu ? 'Active_Card' : 'inActive_card'} onClick={handleActiveCardMenu}>
      <div className="card_top">
        <span className='pro_save'><h2>{children.name}</h2> <p className={activeMenu ? 'discount' : 'discount_inactive'}>Save $40</p></span> <span className='card_toggle'>
          {activeMenu ? <IoIosArrowDropupCircle size={25} /> : <IoChevronDownCircle size={25} color='var(--MainColor)' />}
        </span>
      </div>
      <div className='Active_hidden_card'>
      </div>
    </div>
  )
}

export default ActiveCard
