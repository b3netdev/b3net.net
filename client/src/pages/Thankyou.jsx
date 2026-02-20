import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="mt-force">
      <div className="container text-center ">
        <h1 style={{ color: "#0c5a89" }}>Thank You!</h1>
        <h2>Your submission has been received.</h2>
        <h3>
          We appreciate your time and will get back to you as soon as possible.
        </h3>
        <div className="mt-5">
          <Link
            to="/"
            className="backtohome"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="btn_label" data-text="Back to Home">
              Back to Home
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;