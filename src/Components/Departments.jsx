import React from 'react'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Details from './Data/eDAM';
import webdev from "../Images/webdevimg.png";
import appdev from "../Images/appdevimg.png";
import dandb from "../Images/designandbranding.png";
import uiux from "../Images/ui_ux.jpg";
import cs from "../Images/cybersecurity.jpg";
import aiml from "../Images/aiml.jpg";
import cloud from "../Images/cloud.jpg";
import devops from "../Images/devops.jpg";
import digimarketing from "../Images/digitalimg.png";
import content from "../Images/content.png";
import blockchain from "../Images/blockchain.png";
import { Top } from './Top';

const Departments = () => {
  React.useEffect(() => {
    document.title = "e - DAM | Departments"
  },[])
  const {departments} = Details
  return (
    <div className="">
    <h1 className=" pt-4 px-10 text-blue-900 hover:text-violet-700 font-semibold text-3xl break-words">Our Departments</h1>
    <div className="line w-[8%] h-[2px] mx-10 mt-5 rounded-sm bg-violet-700"></div>
    <section className="departments px-5 pt-5 pb-10  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
      {departments.map((eachDept)=>{
        const {id , domain , ref , desc} = eachDept;
        const imgUrl = `${domain === "Web Development" ? webdev : domain === "App Development" ? appdev : domain === "Designing and Branding" ? dandb : domain === "UI/UX" ? uiux : domain === "Cybersecurity" ? cs : domain === "AI/ML" ? aiml : domain === "Cloud Computing" ? cloud : domain === "DevOps" ? devops : domain === "Digital Marketing" ? digimarketing : domain === "Content Writing" ? content : "Blockchain" ? blockchain : ''}`
        return (
          <div key={id} className="flex flex-col items-center px-2 py-5 justify-center border border-violet-900 rounded-lg mx-5 my-3 hover:bg-violet-100 transition-all w-[98%] md:w-auto">
            <LazyLoadImage src={imgUrl} alt="Domain" className="w-[40%] my-1 rounded-[60%] text-center hidden sm:block" />
            <Link to={ref} className="my-2 w-[100%] text-lg md:hover:text-violet-800 break-words sm:break-normal font-semibold text-black text-center">{domain}</Link>
            <p className="text-md tetx-black text-center w-[90%] md:w-[90%] my-1 break-words cursor-pointer">{desc}</p>
          </div>
        )
      })}
    </section>
    <Top/>
    </div>
  )
}

export default Departments