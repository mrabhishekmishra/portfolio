import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import About from './portfolios/about.jsx'
import Skills from './portfolios/skills.jsx'
import Projects from './portfolios/projects.jsx';
import Contact from './portfolios/contact.jsx'
import Educations from './portfolios/educations.jsx'
import Certificate from './portfolios/Certificate.jsx';




const root = document.getElementById("root");
const route = createBrowserRouter(
   [
      {
         path: "/",
         element: <About />,
      },
      {
         path: "/projects",
         element: <Projects />,
      },
      {
         path: "/skills",
         element: <Skills />,
      },
      {
         path: "/contact",
         element: <Contact />,
      },
      {
         path: "/education",
         element: <Educations />,
      },
      {
         path: "/Certificate",
         element: <Certificate />,
      },
   ]
)



ReactDOM.createRoot(root).render(


   
   <React.StrictMode>
          <div className="container-fluid  bg-gray-900 text-[807e7e] text-[#7792b0] font-serif h-full ">

         
      <RouterProvider router={route} />

      </div>
   
   </React.StrictMode>
);
