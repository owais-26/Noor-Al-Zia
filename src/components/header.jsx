import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="">We are Expert in Retrofitting of Industrial Machines and Repairing of Industrial Automation Equipment’s.  Our Expertise Lies with PLC Automation, HMI Designing, Multi axis Motion Controlling, Synchronizing Robotic Process Lines and CNC Retrofitting. We have a wide range of Industrial Automation Controllers, Sensors and CNC Controllers and Spare Parts stock available ready to be delivered at earliest for our customer satisfaction.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
