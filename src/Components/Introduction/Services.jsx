import React from 'react'
import './Services.css'

function Services(props) {
  return (
    <div id ='services'  data-theme = {props.mode}>
        <div className="container">
           <h1 className="s-title">Services</h1>
           <div className="services-list">
            <div  className='service-item'>
                <i class="fa-solid fa-code"></i>
                <h2 className="s-item">Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore illum, odio sit rem quasi!</p>
                <a href="#">learn more</a>
            </div>
            <div className='service-item'>
            <i class="fa-solid fa-crop-simple"></i>
                <h2 className="s-item">UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore illum, odio sit rem quasi!</p>
                <a href="#">learn more</a>
            </div>
            <div className='service-item'>
            <i class="fa-brands fa-app-store"></i>
                <h2 className="s-item">App Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore illum, odio sit rem quasi!</p>
                <a href="#">learn more</a>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default Services
