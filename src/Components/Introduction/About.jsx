import React from 'react'
import "./About.css"
import about_img from '../../Assets/about1.jpg'
import award from '../../Assets/download (1).jpg'

function About(props) {
  return (
    <div id='about' data-theme = {props.mode}>
     <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={about_img} className='a-img'/>
        </div>
     </div>
     <div className="a-right">
     <h1 className="a-title">About Me</h1>
     <p className="a-sub">It is a long established fact that a reader will be distracted by the readable
     content.</p>
     <p className="a-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae officiis sint nesciunt quisquam amet recusandae,quisquam dicta.</p>
     
   

    <div className="a-award">
      <img src= {award} className="a-award-img" />
      <div className="a-award-texts">
        <h4 className="a-award-title">International Design Award 2023</h4>
        <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam?</p>
      </div>
    </div>
     </div>
     </div>
      
   
    
  )
}

export default About
