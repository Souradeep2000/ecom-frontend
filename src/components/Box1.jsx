import React from "react";
import "../designs/box1.css";
import craftImg1 from "../assets/craft1.png";
import craftImg2 from "../assets/craft2.webp";
import craftImg3 from "../assets/craft3.webp";

function Box1() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide box1"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={craftImg1} className="box-img" alt="Handicraft Basket" />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>First Picture</h5> */}
            {/* <p>Some representative placeholder content for the first slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={craftImg2} className="box-img" alt="Handicraft Basket 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>2nd Picture</h5>
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src={craftImg3} className="box-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>3rd picture</h5>
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Box1;
