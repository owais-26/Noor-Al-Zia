import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header flex">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img className="logo"  src="/img/logo.png" alt="" />
          
            <h3 className="text-3xl pb-3 font-extrabold text-red-800  ">Noor Al Zia Electronics</h3>
        
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav font-bold navbar-nav navbar-right">
            <li>
              <a href="#about" className="text-red-800">
                <p className="text-red-800 pt-2 font-bold">About</p>
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
              <p className="text-red-800 pt-2 font-bold">Products</p>
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
              <p className="text-red-800 pt-2 font-bold">Services</p>
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#footer1" className="page-scroll">
              <p className="text-red-800 pt-2 font-bold">Contact</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
