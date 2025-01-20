import React from "react";
import zomato from "./images/zomato.png";
import qrcode from './images/qrcode.png';
import accordian from './images/accordian.png'

const projects = () => {

  let project = [
        {
           image: zomato,
           link : "https://zomato-abhishek.vercel.app/",
           name: "Zomato Clone",
           language: ["React", "Tailwind", "JavaScript"],
           description:
             " Zomato Clone website is a Front-end website built with the React Tailwind , Css , featuring modern UI/UX design, responsive layouts , and functionalities like restaurant browsing, search , and user-friendly navigation.  ",
         },
         {
          image: qrcode,
          link : "https://qr-code-genetrator.vercel.app/",
          name: "QR Code Generator",
          language: ["React", "Tailwind", "JavaScript"],
          description:
            " Qr Code generator website is a Front-end website built with the React Tailwind , Css , featuring modern UI/UX design, responsive layouts , and functionalities like restaurant browsing, search , and user-friendly navigation.  ",
        } ,
        {
          image: accordian,
          link : "https://accordian-react-lac.vercel.app/",
          name: "Accordian",
          language: ["React", "Tailwind", "JavaScript"],
          description:
            " Zomato Clone website is a Front-end website built with the React Tailwind , Css , featuring modern UI/UX design, responsive layouts , and functionalities like restaurant browsing, search , and user-friendly navigation.  ",
        } 
        ]
        
      
  return (
    <>
      <div className="container m-auto my-4 p-2  text-center ">
        <h1 className="text-[white] text-[25px] font-bold">
          <span className="text-[cyan]">02.</span> Projects
        </h1>
        <div className="card_section   lg:flex flex-wrap justify-around mt-6">
          {
            project.map(
              (details)=>{
                return (
                  <>
                  <div class="shadow_border lg:w-[32%]  border p-3 rounded-lg shadow  border-[cyan] p-3 ">
            <a href={details.link}>
              <img class="rounded-t-lg shadow_border" src={details.image} alt="" />
            </a>
            <div class=" text-start mt-2">
              <h1 className="text-[white] font-bold text-[22px]">
                {details.name}
              </h1>
              <div className="language_name my-4 flex   items-center">
                {
                  details.language.map(
                    (lang)=>{
                      return (
                        <>
                        <div className=" border border-[cyan] bg-[#19394f] text-[cyan] mx-2 px-2 py-1  rounded-full font-bold ">
                  {lang}
                </div>
                        </>
                      )
                    }
                  )
                }
                
                
              </div>
              <p>
               {
                details.description
               }
              </p>
            </div>
          </div>
                  </>
                )
              }
            )
          }
          
        </div>
      </div>
    </>
  );
};

export default projects;
