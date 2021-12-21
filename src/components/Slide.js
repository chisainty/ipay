import React from "react";
const Slide = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={props.data.img} alt="" />
      </div>
      <div className="col-md-6">
        <div className="copy">
          <h2 className="mb-4">{props.data.title}</h2>
          <p>{props.data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
