import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo1.png'
import logoimg from '../../Assets/logo2.png'

import {Link} from 'react-scroll'
function Navbar(props) {

const[showMenu, setshowMenu] = useState(false);

const [color , setColor] = useState(false);



const changeColor=()=>{
  if(window.scrollY >= 200){
    setColor(true);
  }else{
    setColor(false)
  }
}
window.addEventListener('scroll', changeColor);

  return (
  <nav className={
   (props.mode === 'light' && color) ? 'nav-bg' :
   (props.mode === 'dark' && color) ? 'nav1-bg' :
   'navbar'}>
       <img src = {(props.mode==='light')?logo:logoimg} alt='/' className ='logo'/>
       <div className="dekstop-menu" data-theme = {props.mode}>
    <Link activeClass='active' to = 'i' spy = {true}  smooth={true} offset={-100}  duration ={500} className="deskstopMenu-ListItem">Home</Link>
    <Link to = 'about' spy = {true}  smooth={true} offset={-100} duration ={500} className="deskstopMenu-ListItem">About</Link>
    <Link   to = 'services' spy = {true}  smooth={true} offset={-100} duration ={500} className="deskstopMenu-ListItem">Services</Link>
    <Link   to = 'portfolio' spy = {true}  smooth={true} offset={-100} duration ={500} className="deskstopMenu-ListItem">Portfolio</Link>
    <Link   to = "contact " spy = {true}  smooth={true} offset={-100} duration ={500} className="deskstopMenu-ListItem">Contact</Link>
       </div>
       <i onClick = {props.toggleMode}class = 'fas fa-toggle-on' data-theme = {props.mode}></i>

       <i class="fa-solid fa-bars" onClick={()=>setshowMenu(!showMenu)} data-theme = {props.mode}></i>
       <div className="nav-menu" style={{display: showMenu? 'flex':'none'}} data-theme = {props.mode}>
    <Link activeClass='active' to = 'i' spy = {true}  smooth={true} offset={-700}  duration ={500} className="ListItem active" >Home</Link>
    <Link   to = 'about' spy = {true}  smooth={true} offset={900} duration ={500} className="ListItem" onClick={()=>{setshowMenu(!showMenu)}}>About</Link>
    <Link   to = 'services' spy = {true}  smooth={true} offset={1700} duration ={500} className="ListItem" onClick={()=>{setshowMenu(!showMenu)}}>Services</Link>
    <Link   to = 'portfolio' spy = {true}  smooth={true} offset={3000} duration ={500} className="ListItem" onClick={()=>{setshowMenu(!showMenu)}}>Portfolio</Link>
    <Link   to = 'contact' spy = {true}  smooth={true} offset={4500} duration ={500} className="ListItem" onClick={()=>{setshowMenu(!showMenu)}}>Contact</Link>
       </div>
  </nav>

  )
}

export default Navbar
