import React from "react";
import logo from "/images/brand_logo.png";

function Navigate() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row p-3">
            <div className="col-3 justify-content-center align-items-center d-flex">
              <div className="navbar-brand">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="text-white col-6 d-flex align-items-center justify-content-center">
              <ul className="navigate list-unstyled list-inline mt-2">
                <li href="#" className="list-inline-item">
                  Home
                </li>
                <li href="#" className="list-inline-item">
                  Location
                </li>
                <li href="#" className="list-inline-item">
                  About
                </li>
                <li href="#" className="list-inline-item">
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center fw-bolder">
              <button className="navbutton btn btn-sm">Button</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigate;
