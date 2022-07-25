import React, { Component } from "react";
import "./index.css";

class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="row">
          <div class="d-grid gap-2 col-xs-6 col-sm-6 col-md-6 col-lg-6 mx-auto">
            <button type="button" class="btn btn-outline-light">
              VER TODOS
            </button>
            <br />
            <br />
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default ViewAll;
