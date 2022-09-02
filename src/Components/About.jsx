import React from 'react'
import Details from "../Components/Data/eDAM";
import Abhishek from "../Images/Abhishek.png";
import Datta from "../Images/Datta.png";
import {FaLinkedin} from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  const { members } = Details;
  React.useEffect(() => {
    document.title = "e - DAM | About"
  },[])
  return (
    <div className="bg-violet-200">
    <h1 className=" pt-4 px-10 bg-violet-200 text-blue-900 hover:text-violet-700 font-semibold text-3xl break-words">About e-DAM</h1>
    <div className="line my-2 w-[6%] h-[2px] mx-10 mt-5 rounded-sm bg-violet-700"></div>
  <section className="aboutUs w-[100%] bg-violet-200 flex flex-col items-center justify-center pt-4 pb-10">
    {members.map((member)=>{
      const {id,name,role,desc,linkedin} = member;
      return (
        <div className="eachMember flex items-center flex-col md:flex-row w-[100%] max-w-[90%] mx-auto justify-center my-5 border border-black py-5 px-10 rounded-md hover:bg-violet-300 hover:max-w-[90.34%] transition-all" key={id}>
          <div className="flex flex-col items-center">
            <LazyLoadImage load="lazy" src={name === "Abhishek Nagaraja" ? Abhishek : (name === "Datta Velivela" ? Datta : '')} alt="Member" className='w-[20%] md:w-[30%]'/>
            <h1 className="text-center text-lg font-semibold text-violet-600 hover:text-violet-700 hover:underline break-words">{name}</h1>
            <h2 className="text-center text-md text-black font-medium break-words my-[0.5]">{role}</h2>
            <div className="flex flex-row space-x-2">
              <a href={linkedin} target="_blank" rel="noreferrer" className="my-1"><FaLinkedin/></a>
            </div>
          </div>
          <div className="flex flex-col items-center my-2">
            <p className="text-left break-words text-black text-md">{desc}</p>
          </div>
        </div>
      )
    })}
  </section>
  </div>
  )
}

export default About