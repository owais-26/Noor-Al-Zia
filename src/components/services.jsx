import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p className="titlecase">
           
            At Noor Al Zia Electronics, we are specialized in Repairing, Retrofitting, and providing Innovative Solutions for CNC Machines, Industrial Equipment, and Automated Systems. We focus on Precision and Innovation along with Optimal Performance and offers Alternative Solutions for Non-Repairable Equipment, Empowering Industries Worldwide.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 service1">
            <img src="img\service1.jpg" className="img-thumbnail custom-img" alt="" />
            <div className="service-desc">
              <h4 className="font-extrabold py-5 text-white text-3xl">INDUSTRIAL MACHINERY REPAIR AND RETROFITTING</h4>
              <p className="text-justify text-md paraService">
                We specialize in Repairing and Retrofitting a wide range of Industrial as well as CNC Machines of High Speed and Precision Filling Printing Processing Packaging and Manufacturing category from linear single-axis systems to complex multi-9-axis gantry control systems.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="img\service2.jpg" alt="" className="img-thumbnail custom-img" />
            <div className="service-desc">
              <h4 className="font-extrabold py-5 text-white text-3xl">NEW AND ALTERNATIVE SOLUTIONS</h4>
              <p className="text-justify text-md paraService">
                We are experts in designing of custom PLC & IPC HMI-based automated systems and CNC machines for Obsolete or non-repairable CNC and industrial control systems by replacing whole Control system along with drives, motors, hydraulic and pneumatic systems for making your valuable machine work like NEW with most efficient and cost-effective solution in order to make our client Satisfied with our innovative new solution. Our expertise lies in providing alternative solutions to ensure continuous operational efficiency of your factory.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="img\service3.jpg" alt="" className="img-thumbnail custom-img" />
            <div className="service-desc">
              <h4 className="font-extrabold py-5 text-white text-3xl">INDUSTRIAL AUTOMATION SERVICES</h4>
              <p className="text-justify paraService text-md">
                We cater to the design and implementation of PLC PC-based automated systems for industrial machines. Our Repair and NEW Installations services cover a wide range of components including PLCs, VFDs, HMIs, Encoders, Resolvers, Linear Scales, DROs, Power Supplies, Inverters, Axis & Motion Control Cards, Safety Controllers, Touch Panels, Monitors, Edge controllers, PID Temperature controllers, High Speed Counters, RTD modules, DC Drives and Motors, Servo Drives, Servo Valves, Servo Motors, Stepper Drives and Motors, Spindle Drives and Motors, Hydraulic & Pneumatic Valves, Pumps, Cylinders  and Solenoids.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="img\service4.jpg" alt="" className="img-thumbnail custom-img" />
            <div className="service-desc ">
              <h4 className="font-extrabold text-uppercase py-5 text-white text-3xl">Diverse Industrial Machinery Solutions</h4>
              <ul className="paraService">
                <li className="aboutLi">Annual Maintenance Contract for All Industrial Machines</li>
                <li className="aboutLi">SCADA & DCS Designing</li>
                <li className="aboutLi">IIOT System Development</li>
                <li className="aboutLi">PLC programming</li>
                <li className="aboutLi">HMI designing</li>
                <li className="aboutLi">Drive configuration</li>
                <li className="aboutLi">IC programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
