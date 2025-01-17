import Circle from "./images/circle_img.png";

const header = () => {
  return (
    <>
      <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-center">
            <a
              href="https://flowbite.com/"
              class="flex items-center justify-center text-[22px]  space-x-3 rtl:space-x-reverse text-[cyan]  w-[80px] h-[80px] border rounded-full  border-emerald-300"
            >
              AM
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 bg-white-700 rounded md:bg-transparent text-[#807e7e]"
                  >
                    <span className="text-[cyan] mx-2">01.</span>
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 bg-white-700 rounded md:bg-transparent text-[#807e7e]"
                  >
                    <span className="text-[cyan] mx-2">02.</span>
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 bg-white-700 rounded md:bg-transparent text-[#807e7e]"
                  >
                    <span className="text-[cyan] mx-2">03.</span>
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 bg-white-700 rounded md:bg-transparent text-[#807e7e]"
                  >
                    <span className="text-[cyan] mx-2">04.</span>
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 bg-white-700 rounded md:bg-transparent text-[#807e7e]"
                  >
                    <span className="text-[cyan] mx-2">05.</span>
                    Contact 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default header;
