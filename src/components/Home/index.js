import React, { Component } from "react";
import "./index.css";

import Footer from "../Footer";
import Carrusel from "../Carrusel";
import Categories from "../Categories";
import Header from "../Header";
import MobilesCategories from "../Categories/MobilesCategories";
import Dashboard from "../Dashboard";
import ViewAll from "../ViewAll";
import MobilesFooter from "../Footer/MobilesFooter";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  handleClick = () => {
    this.setState({ value: true });
  };

  handleClose = () => {
    this.setState({ value: false });
  };

  render() {
    return (
      <div
        class="container-fluid"
        style={{
          background: "linear-gradient(0deg, #111111 0%, rgba(0, 0, 0, 0.588231) 64.17%, rgba(0, 0, 0, 0) 85.42%)", }}>

          <Header />
          <Dashboard />
        <div
          class="container-fluid"
          style={{
            background:
              "linear-gradient(0deg, #111111 0%, rgba(0, 0, 0, 0.588231) 64.17%, rgba(0, 0, 0, 0) 85.42%)",
          }}
        >
          <div>
            <br />
            <br />
          </div>
          <Carrusel />
          <div>
            <br />
            <br />
          </div>
          <ViewAll />
          <Categories />
          <Footer />
          <MobilesCategories />
          <div>
            <br />
            <br />
            <br />
          </div>
         <MobilesFooter />
        </div>
      </div>
    );
  }
}

export default Home;
