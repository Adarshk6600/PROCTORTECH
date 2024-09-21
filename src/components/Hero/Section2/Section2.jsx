import NavigationHeading from '../../NavigationHeading/NavigationHeading'
import './Section2.css'
import React from 'react'
import Card from '../Card/Card'

const Section2 = () => {
  return (
    <div className='section_two_main'>
      <NavigationHeading name='Benefits' />
      <div className="section_two_heading">
        <span><p>The</p></span>
        <span><p className='section_one_heading_color'>Benefits</p></span>
        <span><p>-You Get</p></span>
      </div>

      <div className="section_two_card_container">
        <div className="vertical_card">
          <h1 className='vertical_text' >FOR A STUDENT</h1>
          <h1 className='vertical_card_counts'>01.</h1>
        </div>
        <Card>
          <div className='vertical_card_two'>
            <p className="institution_heading"> For A Institution </p>
            <ul>
              <li>
                <h2>Unleash academic integrity</h2>
              </li>
              <p>ProctorTech guarantees a fair environment, safeguarding the credibility of your degrees with robust security measures.</p>
              <li><h2>Revolutionize Exam Delivery</h2></li>
              <p>Experience effortless exam management with automated workflows that simplify your academic journey.</p>
              <li><h2>Gain Valuable Insights</h2></li>
              <p>Leverage analytics to gain valuable insights, improving decision-making and operational outcomes.</p>
            </ul>
            <div className='vertical_card_footer'> <h1 className='vertical_card_counts'>02.</h1></div>
          </div>
        </Card>
        <div className="vertical_card">
          <h1 className='vertical_text'>FOR A BUSINESS</h1>
          <h1 className='vertical_card_counts'>03.</h1>
        </div>
      </div>

    </div>
  )
}

export default Section2
