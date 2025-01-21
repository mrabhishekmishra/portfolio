import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header"
import About from "./about"
import Project from "./projects"
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
const index = () => {

  return (
    <>
    <div className="container-fluid  bg-gray-900 text-[807e7e] text-[#7792b0] font-serif">
        {/* header pard */}
          <Header/>
         {/* about part */}
        <About/>
        {/* Projects page */}
        <Project/>
          {/* skills page */}
          <Skills/>
          {/* Contact Page  */}
          <Contact/>
          {/* Footer page */}
          <Footer/>
    </div>
    </>
  )
}

export default index
