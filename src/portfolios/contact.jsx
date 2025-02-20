import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Footer from "./footer";

const contact = () => {
  let input_data = [
    {
      type: "text",
      placeholder: "Name",
    },
    {
      type: "Email",
      placeholder: "Email",
    },
    {
      type: "Number",
      placeholder: "Number",
    },
    {
      type: "text",
      placeholder: "Message",
    },
  ];
  return (
    
    <>
      <Header />
      <div className="container m-auto my-4 p-2  text-center ">
        <h1 className="text-[white] text-[25px] font-bold">
          <span className="text-[cyan]">05.</span> Conatact
        </h1>
        <div className="containern  p-3">
          <div className="contact w-[70%]  p-5 mx-auto border rounded-lg shadow_border ">
            <h1 className="text-[white] font-bold text-[25px] text-start">
              Let's Connect
            </h1>
            <form
              action="https://formspree.io/f/xnnjwjqp"
              method="POST"
              className="mt-5 p-4 "
            >
              {input_data.map((detail) => {
                return (
                  <>
                    <input
                      type={detail.type}
                      name={detail.placeholder}
                      id=""
                      placeholder={detail.placeholder}
                      required
                      className=" mt-5 bg-transparent border border-[#a09d9d] p-3 w-[100%] rounded-lg"
                    />
                  </>
                );
              })}
              <button
                type="submit"
                className="bg-[cyan] mt-5 w-[100%] rounded-lg text-black text-[22px] p-3 cursor-pointer font-bold"
              >
                Send <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
