
import Header from "./header"
import About from "./about"
import Project from "./projects"
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import Educations from "./educations";
import { createBrowserRouter, RouterProvider  ,BrowserRouter } from "react-router-dom";

let route = createBrowserRouter(
  [
    {
      path:'/',
      element:<About/>
    },
    {
      path : '/projects',
      element : <Project/>
    },
    {
      path : '/skills',
      element : <Skills/>
    },
    {
      path : '/contact',
      element : <Contact/>
    },
    {
      path : '/education',
      element : <Educations/>
    },

  ]
)
const index = () => {

  return (
    <>
    <div className="container-fluid  bg-gray-900 text-[807e7e] text-[#7792b0] font-serif h-full ">
   
        <Header/>
        
          <RouterProvider router={route}/>

          {/* <About/>
          <Project/>
          <Skills/>
          <Contact/> */}
          
         <Footer/>
         
        
    </div>
    </>
  )
}

export default index
