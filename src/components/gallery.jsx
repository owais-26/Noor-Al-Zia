import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="">
      <div className="container">
        <div className="section-title">
          <h2 className="brand text-center">Brands We Serve</h2>
          <p className="brandPara">
            At Noor Al Zia Electronics, we offer tailored solutions for diverse
            industries and renowned brands. From precision repair to innovative
            alternatives, we drive efficiency and elevate brand reliability
            through cutting-edge expertise and technology
          </p>
        </div>
        <div className="row">
          
        <div className="flex justify-center items-center mb-3">
                    <img src="img/brandslogo.png" alt="" />

        </div>
                  
        </div>
        <h2
          style={{
            fontSize: "2.5rem",
            marginTop: "5rem",
            textAlign: "center",
          }}
          className="text-center pt-5 font-extrabold text-red-800"
        >
          Industries We Serve
        </h2>
        <div
    style={{
      width: "50px", /* Adjust the width of the underline */
      height: "4px", /* Adjust the height/thickness of the underline */
      backgroundColor: "brown", /* Change the color of the underline */
      margin: "0 auto", /* Centers the underline */
      marginBottom: "20px" 
    }}
  ></div>
        <div class="list-style">
    <div class="col-lg-4 col-sm-4">
        <ul>
            <li class="aboutLi">Packaging</li>
            <li class="aboutLi">Lubricant & Perfume</li>
            <li class="aboutLi">Marine</li>
            <li class="aboutLi">Marble & Stone</li>
            <li class="aboutLi">Leather & Garment</li>
            <li class="aboutLi">Energy & Power</li>
            <li class="aboutLi">Cement</li>
            <li class="aboutLi">Aluminum & Glass</li>
            <li class="aboutLi">Steel & Metal</li>
            <li class="aboutLi">Plastic & Rubber</li>
        </ul>
    </div>
    <div class="col-lg-4 col-sm-4">
        <ul>
            <li class="aboutLi">Molding and Die</li>
            <li class="aboutLi">Automotive</li>
            <li class="aboutLi">Switchgear</li>
            <li class="aboutLi">HVAC</li>
            <li class="aboutLi">Food & Beverage</li>
            <li class="aboutLi">Paper & Pulp</li>
            <li class="aboutLi">Chemical</li>
            <li class="aboutLi">Advertising & Signage</li>
            <li class="aboutLi">Pharmaceutical</li>
            <li class="aboutLi">Foam & Mattresses</li>
        </ul>
    </div>
    <div class="col-lg-4 col-sm-4">
        <ul>
            <li class="aboutLi">Textile & Embroidery</li>
            <li class="aboutLi">Waste Water Treatment Plants</li>
            <li class="aboutLi">Oil & Gas (Offshore/On Shore Rigs)</li>
            <li class="aboutLi">Building Material & Construction</li>
            <li class="aboutLi">Casting & Fabrication</li>
            <li class="aboutLi">Turning & Milling</li>
            <li class="aboutLi">Machine Tools and Metal Processing</li>
            <li class="aboutLi">Logistics and Transportation</li>
            <li class="aboutLi">BMS Building Management</li>
            <li class="aboutLi">CNC Machining</li>
        </ul>
    </div>
</div>

      </div>
    </div>
  );
};
