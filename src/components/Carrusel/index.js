import React, { Component } from "react";
import "./index.css";

import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";

class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6   d-none d-sm-none d-lg-block">
            <p>
              <span style={{ color: "white", textDecorationLine: "underline" }}>
                Proximamente
              </span>
              &nbsp;&nbsp;
              <span style={{ color: "white" }}>Este mes</span>&nbsp;&nbsp;
              <span style={{ color: "white" }}>Gratuitos</span>&nbsp;&nbsp;
              <span style={{ color: "white" }}>Deportes</span>&nbsp;&nbsp;
              <span style={{ color: "white" }}>Música</span>&nbsp;&nbsp;
              <span style={{ color: "white" }}>Solidaridad</span>
            </p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6  d-lg-none">
            <p>
              <span style={{ color: "white", textDecorationLine: "underline" }}>
                Proximamente
              </span>
              &nbsp;&nbsp;
              <span style={{ color: "white" }}>Este mes</span>&nbsp;&nbsp;
              <span style={{ color: "white" }}>Gratuitos</span>&nbsp;&nbsp;
            </p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6  " />
        </div>

        <div class="row  ">
          <div class=" col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
            <img src={img1} class="img" alt="_alt" />
          </div>
          <div class="  col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
            <img src={img2} class="img" alt="_alt" />
          </div>
          <div class=" col-md-2 col-lg-2 d-none d-sm-none d-lg-block">
            <img src={img3} class="img" alt="_alt" />
          </div>
          <div class=" col-md-2 col-lg-2 d-none d-sm-none d-lg-block">
            <img src={img4} class="img" alt="_alt" />
          </div>
          <div class=" col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
            <img src={img5} class="img" alt="_alt" />
          </div>
          <div class=" col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
            <img src={img6} class="img" alt="_alt" />
          </div>
          <div><br /> <br /></div></div>

        {/* Carrusel on mobile */}
        <div class="row">
          <div
            id="carouselExampleControls"
            class="carousel slide col-xs-12 d-lg-none"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="imgXs" alt="_alt" />
                &nbsp;&nbsp;
                <img src={img2} class="imgXs" alt="_alt" />
              </div>
              <div class="carousel-item">
                <img src={img3} class="imgXs" alt="_alt" />
                &nbsp;&nbsp;
                <img src={img4} class="imgXs" alt="_alt" />
              </div>
              <div class="carousel-item">
                <img src={img5} class="imgXs" alt="_alt" />
                &nbsp;&nbsp;
                <img src={img6} class="imgXs" alt="_alt" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrusel;
