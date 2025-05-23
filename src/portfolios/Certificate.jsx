import Header from "./header"
import Footer from "./footer"
import certificate from "./images/certificate.png"

const Certificate = () => {
  return (
    <>
    <Header/>
    <div className=" container  mx-auto flex justify-center  h-screen w-[100%]">
 <img src={certificate} alt=""  />
    </div>
     <Footer/>
    </>
  )
}

export default Certificate
