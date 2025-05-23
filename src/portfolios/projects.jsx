import zomato from "./images/zomato.png";
import qrcode from './images/qrcode.png';
import accordian from './images/accordian.png'
import hero_homes from './images/hero_homes.png'
import jcr from './images/jcr_cabs.png'
import Header from "./header";
import Footer from "./footer";

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
        } ,
        {
          image: hero_homes,
          link : "https://hero-homes-websit.vercel.app/",
          name: "Hero Homes Real State",
          language: ['HTML', 'CSS'],  
          description:
            " Hero Homes  is a static real estate website designed using HTML and CSS, offering a visually appealing and user-friendly interface to showcase premium housing solutions. The website provides potential buyers with comprehensive information about properties, amenities, and location benefits. With a responsive layout, elegant design, and well-structured content, it ensures a seamless browsing experience across devices. The site highlights Hero Homes' commitment to quality living spaces and helps users explore available projects effortlessly ",
        }  ,
        {
          image: jcr,
          link : "https://jcr-cab.vercel.app/",
          name: "JCR Cabs ",
          language: ['HTML', 'CSS'],  
          description:
          "JCR Cabs is a static taxi rental service website built using HTML and CSS, aimed at providing a simple and intuitive platform for users to explore rental options. The website showcases various cab services, pricing, and booking details, ensuring a smooth user experience with a responsive and visually appealing design. It serves as an essential step in web development learning, focusing on creating structured layouts and enhancing front-end skills"
        } 

        ]
        
      
  return (
    <>
    <Header/>
      <div className="container m-auto my-4 p-2  text-center " id="project01">
        <h1 className="text-[white] text-[25px] font-bold">
          <span className="text-[cyan]">02.</span> Projects
        </h1>
        <div className="card_section   lg:flex flex-wrap justify-around mt-6">
          {
            project.map(
              (details)=>{
                return (
                  <>
                  <div id="project" class="shadow_border lg:w-[31%]  border p-3 mt-5 rounded-lg shadow  border-[cyan] p-3 ">
            <a href={details.link}>
              <img class="rounded-t-lg  w-[100%] h-[220px]" src={details.image} alt="" />
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
      <Footer/>
    </>
  );
};

export default projects;
