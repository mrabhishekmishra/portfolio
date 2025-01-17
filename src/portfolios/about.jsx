
import Img from './images/file.jpg'

const about = () => {
 

  return (
   <>
   <div className="container  mt-[50px] m-auto  md:flex justify-between  text-[white] ">
    <div className='w-[60%]  '>
    <p className='text-[cyan] text-[25px] font-bold font-serif'>
        Hi, I am
     </p>
     <h1 className='text-[50px] font-bold font-serif my-5 '>Abhishek Mishra</h1>
     <p className='text-[cyan] text-[25px] font-bold font-serif my-3'>
       I'Am <span  className=' text-[40px] text-[#a8a6a6] m-3'> Full Stack Web Developer </span>
     </p>
     <p className=' text-[22px] font-serif leading-[40px]'>
     Hi, I’m a skilled professional MERN Stack Developer with expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in developing responsive, dynamic front-end interfaces with React and integrating them seamlessly with efficient, scalable back-end APIs built with Node.js and Express. .
 
     </p>

     <button className=' bg-[cyan] text-[black] font-bold p-3 rounded-lg my-5 text-[20px] cursor-pointer' id="image-popups" > 
      Cheak Resume
     </button>

    </div>
    <div className="img w-[35%]  flex justify-center items-center ">
      <div className="profile-img border border-[cyan] rounded-[50%] w-[400px] h-[400px] ">
    <img src={Img} alt="" className=' w-[100%] h-[100%] rounded-[50%]'/>
      </div>
    </div>
     
   </div>
   </>
  )
}

export default about
