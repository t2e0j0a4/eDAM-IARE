import React from 'react'
import Logo from '../Images/e-DAM Logo.png'
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const StarterTemplate = () => {
  React.useEffect(() => {
    document.title = "e - DAM | Home"
  },[])
  return (
    <>
        <section className="bg-violet-200 w-[100%] h-auto flex flex-col lg:flex-row items-center p-5">
          <div className="order-2 lg:order-1 flex flex-col w-[60%] lg:ml-5 pb-10">
            <h1 className="text-3xl mb-3 hover:underline break-words">e - Designing and Marketing</h1>
            <h2 className="text-md my-1 hover:text-violet-900 break-words">e - DAM is a student-based club of IARE that aims to build a technically well-equipped group with the most resourceful digital skills required in the modern workplace, to create and develop websites, applications and designing.</h2>
            <Link className="bg-violet-500 max-w-fit w-[100%] p-2 my-2 text-white rounded-md hover:bg-violet-900 break-words" to="/departments">Depatments</Link>
          </div>
          <div className="order-1 lg:order-2 w-[40%]">
            <LazyLoadImage src={Logo} alt="Logo" />
          </div>
        </section>
        <section className="bg-blue-100 w-[100%] h-auto flex flex-col items-center justify-center py-10">
          <article className="flex flex-col items-center w-[100%] max-w-[50%] my-2">
            <h1 className="my-2 text-3xl text-blue-800 hover:underline text-center">About Us</h1>
            <h2 className="my-2 text-center break-words">e - Designing and Marketing (e - DAM) is a student club of IARE, which focuses on developing the develope culuture among students in the college and work on college-projects, or work as intern's in companies. We focus on working as a team and on profile/resume building. The club is run by the students of IARE, Dundigal, Hyderabad.</h2>
          </article>
          <div className="line my-2 w-[8%] h-1 rounded-sm bg-violet-700"></div>
          <h3 className="my-2 text-xl text-blue-700 font-bold text-center">ABHISHEK NAGARAJA</h3>
          <span className="my-1 text-2xl text-slate-500 text-center">FOUNDER OF e - DAM IARE</span>
        </section>
    </>
  )
}
