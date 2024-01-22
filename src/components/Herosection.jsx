import React from "react";

function Herosection() {
  return (
    <>
      <div className="container hero-section">
        <div className="row pt-5 ">
          <div className="col-6">
            <h1 className="maintext text-uppercase">
              your feet deserve the best
            </h1>
            <p className="main-para">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <button type="button" class="shopnow-btn btn btn-primary btn-sm">
              Shop Now
            </button>
            <button type="button" class=" cata-btn btn btn-secondary btn-sm">
              Category
            </button>
            <div className="shopping">
              <p>Also Avalable on</p>
            </div>
            <div className="brands-logo">
              <img href="#" src="/public/images/flipkart.png" alt="" />
              <img href="#" src="/public/images/amazon.png" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="mt-5 d-flex align-items-center justify-content-center">
              <img src="/public/images/hero-image.png" alt="" className="vert-move" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
