import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Data from "./data.jsx";
import { Link } from "react-router-dom";

let navbar = Data[0].navbar;
const header = () => {
  let [flag, useflag] = useState("0");
  let show = () => {
    if (flag == 0) {
      useflag("1");
    } else {
      useflag("0");
    }
  };

  return (
    <>
      <div className="container-fluid bg-gray-900 shadow_border  sticky top-0 py-4 ">
        <div className="container m-auto flex items-center justify-between p-5 sm:p-0  ">
          <div className="logo w-[80px] h-[80px] rounded-full border-[3px] border-[cyan] text-[cyan] flex justify-center items-center text-[30px]">
             <Link to={"/"}>
             AM
             </Link>
          </div>
          <div className="menubar hidden lg:block ">
            <ul className="flex">
           
              {navbar.map((value, index) => {
                // console.log(value.path);
                return (
                  <>
                   <Link to={value.path}>
                  <li
                    key={index}
                    className="text-[cyan] font-bold font-serif text-[20px] mx-5 cursor-pointer"
                  >
                   
                      {/* {value.id}{" "} */}
                      <span className="text-[#8892b0]">{value.name}</span>
                    
                  </li>
                  </Link>
                  </>
                );
              })}
            </ul>
            {/* navbar buttom contact  */}
          </div>
          <div className="navbar_icon text-[#8892b0] text-[25px]  cursor-pointer relative  lg:hidden ">
            <div className="icon_inner  flex justify-end">
              <FontAwesomeIcon
                icon={faBars}
                onClick={show}
                className={`${flag == 0 ? "block" : "hidden"} `}
              />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={show}
                className={`${flag == 0 ? "hidden" : "block"} text-end`}
              />
            </div>

            <ul
              className={`${
                flag == 0 ? "hidden" : "block"
              } fixed mt-10 right-0 bg-gray-900  h-[100%] px-10 `}
            >
             
              {navbar.map((value, index) => {
                return (
  
                    <>
                     <Link to={value.path}>
                  <li
                    key={index}
                    className="text-[cyan] font-bold font-serif text-[20px] m-5 cursor-pointer"
                  >
                   
                      {/* {value.id}{" "} */}
                      <span className="text-[#8892b0]">{value.name}</span>
                    
                  </li>
                  </Link>
                    </>

                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
