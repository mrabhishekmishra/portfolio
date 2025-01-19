import React from 'react'
import Zomato from "./images/image.png"

const projects = () => {
  
  return (
    <>
    <div className="container m-auto my-4 p-2 border text-center ">
    <h1 className='text-[white] text-[25px] font-bold' ><span className='text-[cyan]'>02.</span> Projects</h1>
    <div className="card_section flex flex-wrap justify-around mt-6">
            

<div class="lg:w-[32%]  border p-3 rounded-lg shadow bg-transparent border-[cyan] p-3 ">
    <a href="https://zomato-abhishek.vercel.app/">
        <img class="rounded-t-lg" src={Zomato} alt="" />
    </a>
    <div class=" text-start">
      <h1 className='text-[white] font-bold text-[22px]'>Zomato Clone</h1>
      <div className="language_name my-4 flex border  items-center">
        
      <div className=' border border-[cyan] bg-[#19394f] text-[cyan] mx-2 px-2 py-1  rounded-full font-bold '>React</div>
      <div className=' border border-[cyan] bg-[#19394f] text-[cyan] px-2 py-1  rounded-full font-bold '>Tailwind</div>
    <p>
    
    </p>
      </div>
    </div>
</div>



    </div>
    </div>
    </>
  )
}

export default projects
