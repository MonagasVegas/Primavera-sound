import React, { Component } from "react";
import "./index.css";

import Main from "../img/Main.png";
import R from "../img/R.png";
import UNO from "../img/uno.png";
import L from "../img/L.png";
import I from "../img/I.png";
import V from "../img/V.png";
import E from "../img/E.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  handleClose = () => {
    this.setState({ value: false });
  };

  render() {
    return (
      <div
        class="container-fluid"
        style={{
          backgroundImage: `url(${Main})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div class="row">
          {/* LOGO */}
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3  d-none d-sm-none d-lg-block">
            <img src={R} width="30px" alt="_alt" />
            <img src={UNO} width="20px" alt="_alt" />
            <img src={L} width="25px" alt="_alt" />
            <img src={I} width="21px" alt="_alt" />
            <img src={V} width="30px" alt="_alt" />
            <img src={E} width="35x" alt="_alt" />
          </div>

          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 " />

          {/* Logo on mobile */}
          <div class="col-8 d-lg-none">
            <img src={R} width="15px" alt="_alt" />
            <img src={UNO} width="10px" alt="_alt" />
            <img src={L} width="14px" alt="_alt" />
            <img src={I} width="12px" alt="_alt" />
            <img src={V} width="15px" alt="_alt" />
            <img src={E} width="16x" alt="_alt" />
          </div>
          <div class="col-2 d-lg-none">
            <i class="bi bi-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FFFFFF"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </i>
          </div>
          <div class="col-2 d-lg-none" onClick={this.handleClose}>
            <i class="bi bi-person-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FFFFFF"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </i>
          </div>

          {/* SEARCH */}
          <div class="col-3 d-none d-sm-none d-lg-block ">
            <span style={{ color: "#FFFFFF" }}>
              Buscar evento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="bi bi-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </i>
            </span>
            <hr></hr>
          </div>
          <div class="col-2 d-none d-sm-none d-lg-block">
            <button
              type="button"
              onClick={this.handleClose}
              class="btn btn-sm btn-outline-light"
            >
              INGRESAR
            </button>
            &nbsp;&nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
