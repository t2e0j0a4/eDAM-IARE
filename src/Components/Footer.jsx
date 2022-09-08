import React from 'react'
import {FaFacebookF , FaTwitter , FaInstagram , FaLinkedin  , FaPhoneAlt  } from 'react-icons/fa'
import {IoMdSchool} from 'react-icons/io'
import {MdAlternateEmail} from 'react-icons/md'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-[100%] bg-violet-300 py-1">
        <div className="toprow flex items-center justify-between w-[100%] lg:h-[60px] py-3 lg:py-0 flex-col lg:flex-row">
          <h1 className="ml-3 text-center text-xl break-words">Get Connected With Us On Social Networks </h1>
          <div className="flex space-x-5 lg:pr-2 my-3 flex-wrap items-center text-center justify-center">
            <a target="_blank" rel="noreferrer" className="my-1" href="https://www.linkedin.com/company/edamiare/"><FaLinkedin/></a>
            <a target="_blank" rel="noreferrer" className="my-1" href="https://twitter.com/edam_iare"><FaTwitter/></a>
            <a target="_blank" rel="noreferrer" className="my-1" href="https://www.facebook.com/people/E-Designing-and-Marketing/100067179284866/"><FaFacebookF/></a>
            <a target="_blank" rel="noreferrer" className="my-1" href="https://www.instagram.com/edamiare/?hl=en"><FaInstagram/></a>
          </div>
        </div>
        <div className="mx-auto line w-[98%] h-[1px] rounded-sm bg-violet-700 my-2 break-words"></div>
        <div className="w-[100%] middlerow grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 py-2">
          <div className="flex flex-col items-center justify-center py-1">
            <h1 className="text-center uppercase text-xl font-bold text-violet-900 hover:underline break-words">e - DAM IARE</h1>
            <p className="w-[90%] text-center break-words">On a journey to grow developers and designer's community in IARE college. We work on skill development and resume building.</p>
          </div>
          <div className="flex flex-col items-center justify-center py-1">
            <h1 className="text-center uppercase text-xl font-bold text-violet-900 hover:underline break-words">Our Work</h1>
            <Link to="/uiux" className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal">UI|UX</Link>
            <Link to="/blockchain" className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal">Blockchain</Link>
            <Link to="/web" className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal">Web Development</Link>
            <Link to="/app" className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal">App Development</Link>
            <Link to="/content" className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal">Content Writing</Link>
          </div>
          <div className="flex flex-col items-center justify-center py-1">
            <h1 className="text-center uppercase text-xl font-bold text-violet-900 hover:underline break-words">Useful Links</h1>
            <Link className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal" to="/about">About Us</Link>
            <Link className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal" to="/departments">Depatments</Link>
            <Link className="text-center my-1 text-lg text-black font-normal underline break-words sm:break-normal" to="/joinus">Join Us</Link>
          </div>
          <div className="flex flex-col items-center justify-center py-1 lg:flex-wrap">
            <h1 className="text-center uppercase text-xl font-bold text-violet-900 hover:underline break-words">Contact</h1>
            <div className="flex flex-col items-center my-1 lg:flex-row lg:flex-wrap justify-center">
              <IoMdSchool/>
              <h2 className="text-lg font-semibold text-black hover:text-violet-800 text-center">Institute Of Aeronautical Engineering</h2>
            </div>
            <div className="flex flex-col items-center my-1 lg:flex-row justify-center lg:flex-wrap lg:space-x-2 flex-wrap">
              <MdAlternateEmail/>
              <h2 className="text-lg font-md text-black hover:text-violet-800 break-words text-center">edesigningsolutions@gmail.com</h2>
            </div>
            <div className="flex flex-col items-center my-1 lg:flex-row justify-center lg:space-x-2">
              <FaPhoneAlt/>
              <h2 className="text-lg font-md text-black hover:text-violet-800 break-words text-center">+91 7995738881</h2>
            </div>
          </div>
        </div>
        <div className="mx-auto line w-[98%] h-[1px] rounded-sm bg-violet-700 my-2 break-words"></div>
        <div className="bottomrow flex flex-row flex-wrap items-center justify-center py-2">
          &copy;&nbsp;<span className="text-lg text-black text-center break-words">Copyright <span className="text-xl font-bold text-violet-900 text-center break-words">e - DAM IARE</span></span>
        </div>
      </footer>
    </>
  )
}

export default Footer