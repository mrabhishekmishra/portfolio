import Header from "./header"
import About from "./about"
import Project from "./projects"
const index = () => {
  return (
    <>
    <div className="container-fluid  bg-gray-900 text-[807e7e]">
        {/* header pard */}
          <Header/>
        {/*  about part */}
        <About/>
        {/* Projects page */}
        <Project/>
    </div>
    </>
  )
}

export default index
