import html from ".//images/HTML.png";
import css from "./images/CSS.png";
import js from "./images/JavaScript.png";
import react from "./images/React JS.png";
import tailwind from "./images/Tailwind CSS.png";
import bootstrap from "./images/Bootstrap.png";
import materialul from "./images/Material UI.png";
import ExpressJs from './images/Express JS.png'
import NodeJS from './images/Node JS.png'
import MongoDb from './images/MongoDB.png'
import Php from './images/php.png'
import Git from './images/Git.png'
import Github from './images/Github.png'
import VsCode from './images/VS Code.png'
import Postman from './images/Postman.png'
import MongoDBCompass from './images/MongoDB Compass.png'
import ChatGPT from './images/ChatGPT-Logo.png'
import Header from "./header";
import Footer from "./footer";
const skills = () => {
  let skill = [
    {
      skills_name: "Frontend",
      skills_details: [
        {
          skills_images: html,
          skills_lang: "HTML",
        },
        {
          skills_images: css,
          skills_lang: "CSS",
        },
        {
          skills_images: js,
          skills_lang: "JavaScript",
        },
        {
          skills_images: react,
          skills_lang: "REACT",
        },
        {
          skills_images: tailwind,
          skills_lang: "TAILWIND",
        },
        {
          skills_images: bootstrap,
          skills_lang: "BOOTSTRAP",
        },
        {
          skills_images: materialul,
          skills_lang: "MATERIAL UL",
        }
      ],
    },
    {
      skills_name: "BackEnd",
      skills_details: [
        {
          skills_images: ExpressJs,
          skills_lang: "ExpressJS",
        },
        {
          skills_images: NodeJS,
          skills_lang: "NodeJS",
        },
        {
          skills_images: MongoDb,
          skills_lang: "MongoDb",
        },
        {
          skills_images: Php,
          skills_lang: "PHP",
        },
       
        
      ],
    },
    {
      skills_name: "Tools",
      skills_details: [
        {
          skills_images: Git,
          skills_lang: "Git",
        },
        {
          skills_images: Github,
          skills_lang: "Github",
        },
        {
          skills_images: VsCode,
          skills_lang: "VS Code",
        },
        {
          skills_images: Postman,
          skills_lang: "Postman",
        },
        {
          skills_images: MongoDBCompass,
          skills_lang: "MongoDB Compass",
        },
        {
          skills_images: ChatGPT,
          skills_lang: "ChatGPT",
        }
       
        
      ],
    }
  ];
  return (
    <>
    <Header/>
      <div className="container m-auto my-4 p-3  text-center ">
        <h1 className="text-[white] text-[25px] font-bold">
          <span className="text-[cyan]">03.</span> Skills
        </h1>
        <div className=" w-[100%]  p-3 lg:flex flex-wrap justify-around">
          {skill.map((v, i) => {
            return (
              <>
                <div className="w-[100%] lg:w-[48%] mt-4  cart border p-5 shadow_border rounded-xl border-[#7792b0]">
                  <h1 className="text-[white] text-[25px] font-bold">
                    {v.skills_name}
                  </h1>
                  <div className="skills_cart  flex  flex-wrap  mt-5 justify-around mx-3 ">
                    {
                      v.skills_details.map(
                        (details , i)=>{
                          
                          return(
                            <>
                             <div className="mt-5  skills_innercart border border-[#7792b0] rounded-lg flex mx-2  items-center font-bold px-3 py-2">
                      <img src={details.skills_images} alt="" className="w-10 mx-2" />
                      <p>{details.skills_lang} </p>
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
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default skills;
