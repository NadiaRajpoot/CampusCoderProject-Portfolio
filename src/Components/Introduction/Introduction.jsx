import React, { useEffect, useRef } from 'react'
import './Introduction.css'
import image2 from '../../Assets/image.png'
import {init} from 'ityped';


function Introduction(props) {
    const textRef = useRef();
  useEffect(()=>{
   init(textRef.current, {
    showCursor : true,
   strings: ['Frontend Developer!', 'Photographer!', 'Designer!', 'Content Creator!'] 
   })
  },[])

  return (
    <div className='i' data-theme = {props.mode}
    >
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Nadia Rajpoot</h1>
                <h2 className="i-title">I am a  <span className='r' ref = {textRef}></span></h2>
              
                <p className="i-desc">I design to develop services for customer of all sizes,
                 specializing in creating stylish, modern webites, web services
                and online store</p>
            
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={image2} alt="" className="i-img" />
        </div>
     
    </div>
  )
}

export default Introduction
