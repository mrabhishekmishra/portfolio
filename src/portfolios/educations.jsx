
import Header from './header'
import Footer from './footer'
import vbspu from './images/vbspu.png'
import wscube from "./images/ws-cube-white-logo.svg"
import up from './images/upbord.png'

const educations = () => {
  const edu_data = [
     {
      image : up ,
      uni_name : 'Utter Pradesh Madhyamik Shiksha Parishad',
      course_name : "HightSchool (10th)",
      year: "2014-2016",
      status : "Complete"
    },,
    {
      image : up ,
      uni_name : 'Utter Pradesh Madhyamik Shiksha Parishad',
      course_name : "Intermediate (12th)",
      year: "2016-2018",
      status : "Complete"
    },
    {
      image : vbspu ,
      uni_name : 'Veer Bhadur Purvanchal University',
      course_name : "Bachelor of Commerce (B.Com)",
      year: "2018-2021",
      status : "Complete"
    },{
      image : vbspu ,
      uni_name : 'Veer Bhadur Purvanchal University',
      course_name : "Bachelor of Computer Application (BCA)",
      year: "2018-2021",
      status : "Pursing"
    },{
      image : wscube ,
      uni_name : 'WsCube Tech (Jodhpur)',
      course_name : "FULL STACK WEB DEVELOPER (PHP & MERN)",
      year: "2022-2023",
      status : "Complete"
    },
  ]
  return (
    <>
    <Header/>
      <div className="container m-auto my-4 p-2  text-center " id='education'>
      <h1 className="text-[white] text-[25px]  font-bold">
          <span className="text-[cyan]">04.</span> Educations 
        </h1>
        <div className="education  text-start p-3 mt-2">
          {
            edu_data.map(
              (v,i)=>{
                console.log(v.image)
                return(
                  <>
                  <div className="cart  p-3 rounded-lg shadow_border mt-5">
              <div className="university flex w-[50%] items-center">
              <img src={v.image} className='w-[6%] text-[white] '/>
              <h1 className='text-[22px] mx-3 font-bold'>{v.uni_name}</h1>
              </div>
              <div className="course  mt-4 px-11 flex justify-between text-[18px]">
              <h1>{v.course_name}</h1> <span> {v.year}</span>
              </div>
              
            </div>
                  </>
                )
              }
            )
          }
            
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default educations
