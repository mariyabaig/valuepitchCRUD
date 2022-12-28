import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

  return (
    <>
  
    <nav className='w-full h-20 fixed bg-gray-900 text-gray-300'>
    <input type="checkbox" id="check" hidden></input>
    <label for="check" className='float-right mr-10 text-gray-300 text-3xl leading-[80px] lg:hidden'><MenuIcon/></label>
      <label className='text-gray-300 leading-[80px] md:leading-[80px] pl-12 text-3xl md:pl-24 md:text-4xl'>Valuepitch</label>
      <ul className='float-right mr-10 lg:flex space-x-4 leading-[80px] text-white uppercase rounded fixed lg:relative h-[100vh] lg:h-0 w-[100%]  lg:w-fit top-20 lg:top-0 left-[-100%] lg:left-0 transition-all duration-300 lg:transition-none text-center bg-gray-800'>
      
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/csvtotable">Convert</Link></li>
        <li><Link to ="/about">About</Link></li>
        
        
      </ul>
    </nav>
    </>
    
       
  )
}

export default Navbar
