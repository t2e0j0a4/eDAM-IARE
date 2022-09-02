import React from 'react'
import {BsArrowUp} from "react-icons/bs"

export const Top = () => {
    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.style.scrollBehavior = "smooth";
        document.body.style.transition = "all 2s ease-in-out";
    }
  return (
    <div class="text-right p-2">    
        <button className="bg-violet-900 py-2 px-3 text-white rounded-md hover:bg-violet-300 border border-blue-900 hover:text-black transition-all" type="button" onClick={()=>goToTop()}><span className="flex items-center">Top&nbsp;<BsArrowUp/></span></button>
    </div>
  )
}
