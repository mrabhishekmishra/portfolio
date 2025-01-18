import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const header = () => {
  let [flag , useflag] = useState('0')
  console.log(flag)
  let show = ()=>{
   if(flag == 0){
      useflag('1')
   }else{
     useflag('0')
   }
    
  }
  return (
    <>
      <div className="container-fluid  bg-[#112240]  sticky top-0 py-4 ">
        <div className="container m-auto flex items-center justify-between p-5 sm:p-0 ">

      
      <div className="logo w-[80px] h-[80px] rounded-full border-[3px] border-[cyan] text-[cyan] flex justify-center items-center text-[30px]">
        AM
      </div>
      <div className="menubar hidden lg:block ">
        <ul className="flex">
          <li className="text-[cyan] font-bold font-serif text-[20px] mx-5 cursor-pointer">
            01. <span className="text-[#8892b0]">About</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] mx-5 cursor-pointer">
            02. <span className="text-[#8892b0]">Project</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] mx-5 cursor-pointer">
            03. <span className="text-[#8892b0]">Skills</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] mx-5 cursor-pointer">
            04. <span className="text-[#8892b0]">Education</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] mx-5 cursor-pointer">
            05. <span className="text-[#8892b0]">Contact </span>
            
          </li>

        </ul>
        {/* navbar buttom contact  */}
      </div>
      <div className="navbar_icon text-[#8892b0] text-[25px]  cursor-pointer relative  lg:hidden ">
        <div className="icon_inner  flex justify-end">
      <FontAwesomeIcon icon={ faBars }  onClick={show} className={`${(flag == 0) ? 'block' : 'hidden'} `}/>
      <FontAwesomeIcon icon={ faXmark }  onClick={show} className={`${(flag == 0) ? 'hidden': 'block'} text-end`}/>
      </div>

      <ul className={`${(flag == 0) ? 'hidden': 'block'} fixed mt-10 right-0 bg-[#112240]   px-10 `}>
          <li className="text-[cyan] font-bold font-serif text-[20px] my-5 cursor-pointer">
            01. <span className="text-[#8892b0]">About</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] my-5 cursor-pointer">
            02. <span className="text-[#8892b0]">Project</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] my-5 cursor-pointer">
            03. <span className="text-[#8892b0]">Skills</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] my-5 cursor-pointer">
            04. <span className="text-[#8892b0]">Education</span>
            
          </li>
          <li className="text-[cyan] font-bold font-serif text-[20px] my-5 cursor-pointer">
            05. <span className="text-[#8892b0]">Contact </span>
            
          </li>

        </ul>

      </div>
      </div>
      </div>
    </>
  );
};

export default header;
