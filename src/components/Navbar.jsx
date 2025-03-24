import React from 'react'
import download from '../assets/download.png'
import { Link } from 'react-router'
import { NavLink, useNavigate } from 'react-router'


const Navbar = () => {


  const navigate = useNavigate()

  return (


    <div className='navbar'>

       {/* <img src={download} alt="" width={20} height={10} /> */}
       <ul>

        <NavLink to='/'><li>Home</li></NavLink> 
        <NavLink to='/about'><li>About</li></NavLink>  
        
       {/* //conected with route */}

        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/product'><li>Products</li></NavLink>
        <NavLink to='/jobs'><li>Jobs</li></NavLink>
       
       </ul>

       <button
       onClick={()=> navigate('/contact',{replace:true})}   //this true use to remove the immediate history route from back history stack of browser and replace it with the second last history route 
       >Get Started
       </button>
       
    </div>
  )
}

export default Navbar
