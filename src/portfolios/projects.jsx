import React from "react";
import Zomato from "./images/image.png";

const projects = () => {
  return (
    <>
      <div className="container m-auto my-4 p-2  text-center ">
        <h1 className="text-[white] text-[25px] font-bold">
          <span className="text-[cyan]">02.</span> Projects
        </h1>
        <div className="card_section flex flex-wrap justify-around mt-6">
          <div class="shadow_border lg:w-[32%]  border p-3 rounded-lg shadow  border-[cyan] p-3 ">
            <a href="https://zomato-abhishek.vercel.app/">
              <img class="rounded-t-lg shadow_border" src={Zomato} alt="" />
            </a>
            <div class=" text-start">
              <h1 className="text-[white] font-bold text-[22px]">
                Zomato Clone
              </h1>
              <div className="language_name my-4 flex   items-center">
                <div className=" border border-[cyan] bg-[#19394f] text-[cyan] mx-2 px-2 py-1  rounded-full font-bold ">
                  React
                </div>
                <div className=" border border-[cyan] bg-[#19394f] text-[cyan] px-2 py-1  rounded-full font-bold ">
                  Tailwind
                </div>
              </div>
              <p>
                Zomato Clone website is a Front-end website built with the React
                Tailwind CSS.featuring modern UI/UX designs, responsive layouts,
                and functionalities like restaurant browsing, search, and
                user-friendly navigation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
