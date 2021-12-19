import React from "react";
const Slide = (props) => {
  
  return (
    <div className="row">
      <div className="col-md-6">
        <img src="images/features//Use-Image.png" alt="" />
      </div>
      <div className="col-md-6">
        <div className="copy">
          <h2 className="mb-4">{props.data.title}</h2>
          <p>
            Enjoy seamless ride when you choose to pay for your trips with iPay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
