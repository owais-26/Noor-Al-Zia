import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  return (
    <>
      <footer id="footer1"
        style={{
          color: "white",
        }}
        class="bg-red-700 dark:bg-red-700"
      >
        <div
          style={{
            color: "white",
          }}
          class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"
        >
          <div class="md:flex  md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://nooralzia.com/" class="sm:flex  items-center">
                <h3
                  style={{
                    color: "white",
                  }}
                  class="self-center text-center col-md-6 font-bold whitespace-nowrap dark:text-white"
                >
                  Noor Al Zia Electronics
                </h3>
              </a>
              <p className="col-md-6 text-center">
              Expert in Retrofitting of Industrial Machines and Repairing of Industrial Automation Equipment’s
              </p>
            </div>
            <div class="grid grid-cols-2 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 class="mb-6 text-2xl font-bold text-white uppercase dark:text-white">
                  Links
                </h2>
                <ul class="text-white text-white ">
                  <li class="mb-4">About</li>
                  <li class="mb-4">Products</li>
                  <li class="mb-4">Services</li>
                  <li class="mb-4">Our Brands</li>
                  <li class="mb-4">Industrial Solutions</li>
                </ul>
              </div>
              {/* <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Other</h2>
                  <ul class="text-white text-white font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div> */}
              <div>
                <h2 class="mb-6  text-2xl font-bold text-white uppercase dark:text-white">
                  Contact us
                </h2>
                <ul class="text-white text-white ">
                  <li class="mb-4">
                    <i className="fa fa-globe mr-3"></i>www.nooralzia.com
                  </li>
                  <li class="mb-4">
                    <i className="fa fa-phone mr-3"></i> 058-574-7005
                  </li>
                  <li class="mb-4">
                    <i className="fa fa-phone mr-3"></i> 055-737-2005
                  </li>
                  <li class="mb-4 emailfont">
                    <i className="fa fa-envelope mr-2  "></i>nooralzia005@gmail.com
                  </li>
                  <li className="mb-4 email">
  <i className="fa fa-envelope mr-3"></i>industrialautomation@nooralzia.com
</li>

                  <li className=" mb-4  sm:block none">
                    {" "}
                    <i className="fa fa-map-marker mr-5"></i>Dubai, UAE
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="sm:text-md text-sm  text-white sm:text-center text-white">
              © 2024 Noor Al Zia Electronics. Designed by <a className="text-white font-bold"  href="https://gennovative-solutions.netlify.app">gennovative solutions</a> 
            </span>
            <div class="flex  mt-4 sm:justify-center sm:mt-0">
              <i className="fa mx-3 fa-facebook"></i>
              <i className="fa mx-3 fa-instagram"></i>
              <i className="fa mx-3 fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
