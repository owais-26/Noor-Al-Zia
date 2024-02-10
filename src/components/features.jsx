import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="">
      <div className="mx-5 container">
        <div className="col-md-10 col-md-offset-1 ">
          <h2 className="features-title text-center">Our Products</h2>
        </div>
        <div className="row text-center">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="col-lg-4 featuresDiv my-24 sm:my-5 col-md-3"
              >
               <div className="flex justify-center items-center mb-3">
               <img src={`${d.icon}`} alt="" className="custom-img-features" />

        </div>
                <h3 className="text-3xl font-bold text-red-800 py-1">{d.title}</h3>
                <div className="row">
                  {d.subcategories && d.subcategories.length > 0 ? (
                    <div className="col-lg-6">
                      <ul>
                        {d.subcategories
                          .slice(0, 8)
                          .map((subcategory, index) => (
                            <li
                              className="aboutLi"
                              key={`${d.title}-${index}-${index}`}
                            >
                              {subcategory}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ) : null}
                  {d.subcategories && d.subcategories.length > 0 ? (
                    <div className="col-lg-6">
                      <ul>
                        {d.subcategories
                          .slice(8, 16)
                          .map((subcategory, index) => (
                            <li
                              className="aboutLi"
                              key={`${d.title}-${index}-${index}`}
                            >
                              {subcategory}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};
