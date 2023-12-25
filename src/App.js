import About from "./Components/Introduction/About";
import Contact from "./Components/Introduction/Contact";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Introduction/Navbar";
import PortFolio from "./Components/Introduction/PortFolio";
import Services from "./Components/Introduction/Services";
import Footer from './Components/Introduction/Footer'
import { useState } from "react";


function App() {
  const [mode , setmode] = useState('light');
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setmode('dark');
    
     
    }
    else{
      setmode('light');
     
    }
  }
  return (
    <>

     <Navbar toggleMode = {toggleMode} mode = {mode}/>
<Introduction mode = {mode}/>
<About mode = {mode}/>
<Services  mode = {mode}/>
<PortFolio   mode = {mode}/>
<Contact mode = {mode}/>
<Footer mode = {mode}/>

</>
   
  );
}

export default App;
