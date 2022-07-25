import React, { Component } from "react";
import "./index.css";

import { PurchaseDetail } from '../PurchaseDetail'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }
  handleClose = () => {
    this.setState({ value: false });
  };

  handleClick = () => {
    this.setState({ value: true });
  };

  render() {
    return (
      <>
        <div class="container-fluid " style={{ marginTop: "-490px" }}>
          <div><br /><br /></div>
          <div class="row  title">
            <div class="col-12 textWhite">
              <h6>7 Noviembre 2022 - 14:00 hs</h6>
            </div>
            <div class="col-12 textWhite ">
              <h1>Primavera sound</h1>
              <h1>Buenos Aires 2022</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-12 ">
              <button type="button" onClick={this.handleClick} class="btn2">
                MÁS INFORMACIÓN
              </button>
            </div>
            <div><br /></div>
             {this.state.value ? ( <div> <PurchaseDetail /></div>) : ( "" )}

          </div>

          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3  ">
              <button
                style={{
                  background: "#FA008D",
                  borderRadius: "5px 5px 5px 5px",
                  width: "25px",
                  height: "10px",
                  border: "#FA008D",
                }}
              ></button>
              &nbsp;&nbsp;
              <button
                style={{
                  background: "#555555",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  border: "#555555",
                }}
              ></button>
              &nbsp;&nbsp;
              <button
                style={{
                  background: "#555555",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  border: "#555555",
                }}
              ></button>
              &nbsp;&nbsp;
              <button
                style={{
                  background: "#555555",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  border: "#555555",
                }}
              ></button>
              &nbsp;&nbsp;
              <button
                style={{
                  background: "#555555",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  border: "#555555",
                }}
              ></button>
              &nbsp;&nbsp;
              <button
                style={{
                  background: "#555555",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  border: "#FA008D",
                }}
              ></button>
            </div>

            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 " />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
