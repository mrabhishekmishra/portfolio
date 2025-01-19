import HTML from './/images/HTML.png'
import CSS from './images/CSS.png'
import JS from './images/JavaScript.png'
import REACT from './images/React JS.png'
import TAILWIND from './images/Tailwind CSS.png'
import BOOTSTRAP from './images/Bootstrap.png'
import METERIALUI from './images/Material UI.png'
import ExpressJs from './images/Express JS.png'
import NodeJS from './images/Node JS.png'
import MongoDb from './images/MongoDB.png'
import Php from './images/php.png'
const skills = () => {
  return (
    <>
    <div className="container m-auto my-4 p-3  text-center ">
            <h1 className="text-[white] text-[25px] font-bold">
              <span className="text-[cyan]">03.</span> Skills
            </h1>
            <div className=" w-[100%]  p-3 lg:flex justify-around">
                <div className="w-[100%] lg:w-[48%] mt-4  cart border p-5 rounded-xl border-[#7792b0]">
                    <h1 className="text-[white] text-[25px] font-bold">Frontend</h1>
                    <span className="skills_cart  flex  flex-wrap  mt-5 justify-around ">
                        <div className="mt-5  skills_innercart border border-[#7792b0] rounded-lg flex   items-center font-bold p-3">
                        <img src={HTML} alt="" className='w-10'/>
                        <p>HTML </p>
                        </div>
                        <div className=" mt-5  skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={CSS} alt="" className='w-10'/>
                        <p>CSS </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={JS} alt="" className='w-10'/>
                        <p>JavaScript </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={REACT} alt="" className='w-10'/>
                        <p>React Js </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={TAILWIND} alt="" className='w-10'/>
                        <p>Tailwind </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={BOOTSTRAP} alt="" className='w-10'/>
                        <p>Bootstrap </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={METERIALUI} alt="" className='w-10'/>
                        <p>Material Ul </p>
                        </div>
                    </span>
                </div>
                <div className=" w-[100%] lg:w-[48%] mt-5 cart border p-5 rounded-xl border-[#7792b0]">
                    <h1 className="text-[white] text-[25px] font-bold">Backend</h1>
                    <span className="skills_cart  flex  flex-wrap  mt-5 justify-around ">
                        <div className="mt-5  skills_innercart border border-[#7792b0] rounded-lg flex   items-center font-bold p-3">
                        <img src={ExpressJs} alt="" className='w-10'/>
                        <p>Express Js  </p>
                        </div>
                        <div className=" mt-5  skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={NodeJS} alt="" className='w-10'/>
                        <p>Node Js </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={MongoDb} alt="" className='w-10'/>
                        <p>MongoDB </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={Php} alt="" className='w-10'/>
                        <p>PHP </p>
                        </div>
                        <div className=" mt-5 skills_innercart border border-[#7792b0] rounded-lg flex  items-center font-bold p-3">
                        <img src={TAILWIND} alt="" className='w-10'/>
                        <p>Firebase </p>
                        </div>
                        
                    </span>
                </div>
            </div>
          </div>
    </>
  )
}

export default skills
