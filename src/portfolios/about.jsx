import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Img from "./images/file.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {  Modal } from "flowbite-react";
import { useState } from "react";
import Header from "./header";
import Footer from './footer'
import Resumeimg from './images/resumeimg.png'

const about = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header/>
      <div className="container-fluid  flex" id="about">
        <div className="social_links  h-[100%]  fixed top-100 p-3  lg:flex justify-center items-center hidden lg:block">
          <ul className=" ">
            <li className="cursor-pointer my-5 md:text-[25px]">
              {" "}
              <a href="https://github.com/mrabhishekmishra">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="cursor-pointer my-5 md:text-[25px]">
              {" "}
              <a href="https://www.linkedin.com/in/abhishek-mishra-ab59b4205/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="cursor-pointer my-5 md:text-[25px]">
              {" "}
              <a href="https://www.instagram.com/_mr__abhishek._">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="cursor-pointer my-5 md:text-[25px]">
              {" "}
              <a href="https://wa.link/5mm1zf">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
          </ul>
        </div>
        <div className="container p-5 mt-[50px] m-auto block md:flex md:justify-between   text-[white] ">
          <div className="w-[60%] text-center lg:text-start m-auto ">
            <div className="img mx-w-[100%]  flex justify-center m-auto  block lg:hidden items-center  ">
              <div className="profile-img border border-[cyan]  w-[100%]  rounded-[50%] overflow-hidden ">
                <img src={Img} alt="" className=" w-[100%]" />
              </div>
            </div>
            <p className="text-[cyan] text-[25px] font-bold font-serif">
              Hi, I am
            </p>
            <h1 className="md:text-[50px] font-bold font-serif my-5 ">
              Abhishek Mishra
            </h1>
            <p className="text-[cyan] md:text-[25px] font-bold font-serif my-3">
              I'Am{" "}
              <span className=" md:text-[40px] text-[#a8a6a6] m-3">
                {" "}
                Full Stack Web Developer{" "}
              </span>
            </p>
            <p className=" text-[22px] font-serif leading-[40px]">
              Hi, I’m a skilled professional MERN Stack Developer with expertise
              in building full-stack web applications using MongoDB, Express.js,
              React.js, and Node.js. Proficient in developing responsive,
              dynamic front-end interfaces with React and integrating them
              seamlessly with efficient, scalable back-end APIs built with
              Node.js and Express. .
            </p>

            <button
              className=" bg-[cyan] text-[black] font-bold p-3 rounded-lg my-5 text-[20px] cursor-pointer"
              id="image-popups" onClick={()=> setOpenModal(true)}
            >
              Cheak Resume
            </button>
          </div>
          <div className="img w-[35%]  flex justify-center m-auto hidden lg:block items-center ">
            <div className="profile-img border border-[cyan] rounded-[50%] w-[400px] h-[400px] overflow-hidden ">
              <img src={Img} alt="" className=" w-[100%]" />
            </div>
          </div>
        </div>
        <div className="contact   h-[100%] hidden lg:block fixed right-[-120px] lg:flex items-center justify-center p-3 ">
          <div className="emails  rotate-90 font-bold font-sans">
            abhishekmishra342001@gamil.com 8948442561
          </div>
        </div>
      </div>
      <Footer/>
      {/* model */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="shadow_border rounded-lg bg-gray-900">
      <Modal.Header ><span className="text-[white]">Resume</span></Modal.Header>
        <Modal.Body >
          <div className="space-y-6 w-[100%] h-[400px] ">
            <img src={Resumeimg} alt="" className="w-full" />
          </div>
        </Modal.Body>
        <Modal.Footer >
        <button className=" bg-[cyan] text-[black] font-bold p-3  rounded-lg  text-[16px] cursor-pointer"> 
             <a href={"https://drive.google.com/drive/folders/1-IR1DFoKL6DhukZ34p-bxCPGiAiVXHUP"} >
             Download Resume
              </a>  
            </button>
            </Modal.Footer>
        </div>
      </Modal>
      
    </>
  );
};

export default about;
