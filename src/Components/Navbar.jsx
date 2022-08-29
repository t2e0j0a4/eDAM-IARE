import React from 'react'
import navlogo from '../Images/e-DAM Logo.png';
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <nav className="navbar w-[100%] bg-slate-50 flex flex-col lg:flex-row lg:items-start lg:justify-center" style={{fontFamily : "'Raleway', sans-serif"}}>
      <div className="head">
        <img className='w-[70px] h-[80px]' src={navlogo} alt="Logo" />
      </div>
      <ul id="navItems" className="h-0 w-[100%] lg:flex lg:flex-row lg:items-center lg:justify-center lg:h-[80px] lg:space-x-16 flex flex-col items-center justify-center space-y-10 lg:space-y-0 lg:pb-0 lg:transition-none lg:duration-0">
        <li className="list-none invisible lg:visible"></li>
        <li className="list-none invisible lg:visible text-center"><Link to="/" className="hover:underline hover:text-violet-900 text-center p-2 hover:bg-violet-200 hover:lg:py-1 hover:rounded-[10px]">Home</Link></li>
        <li className="list-none invisible lg:visible text-center"><Link to="/about" className="hover:underline hover:text-violet-900 text-center p-2 hover:bg-violet-200 hover:lg:py-1 hover:rounded-[10px]">About Us</Link></li>
        <li className="list-none invisible lg:visible text-center"><Link to="/departments" className="hover:underline hover:text-violet-900 text-center p-2 hover:bg-violet-200 hover:lg:py-1 hover:rounded-[10px]">Departments</Link></li>
        <li className="list-none invisible lg:visible text-center"><Link to="/joinus" className="hover:underline hover:text-violet-900 text-center p-2 hover:bg-violet-200 hover:lg:py-1 hover:rounded-[10px]">Join Us</Link></li>
        <li className="list-none invisible lg:visible text-center"><Link to="/contactus" className="hover:underline hover:text-violet-900 text-center p-2 hover:bg-violet-200 hover:lg:py-1 hover:rounded-[10px]">Contact Us</Link></li>
      </ul>
      <div className="absolute top-0 right-0 mt-[2rem] mr-4 cursor-pointer lg:hidden" onClick={()=>{
        console.log("Menu")
        let navItems = document.querySelector("ul");
        let listItems = Array.from(document.querySelectorAll("ul li"));
        if (navItems.classList.contains("h-0") ){
          navItems.classList.remove("h-0");
          navItems.classList.add("h-auto");
          navItems.classList.add("pb-6");
        }
        else if (navItems.classList.contains("h-auto")){
          navItems.classList.add("h-0");
          navItems.classList.remove("h-auto");
          navItems.classList.remove("pb-6");
        }
        listItems.map((eachItem)=>{
          if (eachItem.classList.contains("invisible")){
            eachItem.classList.remove("invisible");
            eachItem.classList.add("visible");
          }
          else if (eachItem.classList.contains("visible")){
            eachItem.classList.add("invisible");
            eachItem.classList.remove("visible");
          }
          return '';
        })
      }}>
          <AiOutlineMenu/>
      </div>
    </nav>
  )
}
