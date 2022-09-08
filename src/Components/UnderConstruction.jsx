import React from 'react'

const UnderConstruction = () => {
  return (
    <section className="w-[100%] h-[60vh] py-10 flex flex-col items-center">
        <h1 className="text-center sm:text-left flex flex-col text-3xl font-semibold text-violet-900 items-center my-2 break-word flex-wrap">
            Site <br/> Under Contruction
        </h1>
        <div className="line w-[10%] h-[2px] bg-blue-900 my-2"></div>
    </section>
  )
}

export default UnderConstruction