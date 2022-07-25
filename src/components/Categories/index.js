import React, { Component } from "react";
import "./index.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row textWhite d-none d-xs-none d-lg-block">
          <div class="col-12"><h5>Categorías</h5></div>
          <br /><br />
        </div>

        <div class="row d-none d-xs-none  d-lg-block ">
          <div class="col-12 ">
            <button type="button" class="btn btn-sm btn-outline-light">
              Automoviles, barcos, aviones
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Artes escénicas y visuales
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Cine y medios de comunicación
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn  btn-sm  btn-outline-light">
              Comunidad
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Deporte
            </button>
          </div>
          <div>
            <br />
          </div>
        </div>

        <div class="row d-none d-xs-none d-lg-block ">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
            <button type="button" class="btn btn-sm   btn-outline-light">
              Espiritualidad
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Familia y educación
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Gastronomía
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Hogar y estilo de vida
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Moda
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Música
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Negocios
            </button>
          </div>
          <div>
            <br />
          </div>
        </div>

        <div class="row d-none d-xs-none d-lg-block">
          <div class="col-12 ">
            <button type="button" class="btn btn-sm   btn-outline-light">
              Pasatiempo
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Salud
            </button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-sm   btn-outline-light">
              Solidaridad
            </button>
          </div>
        </div>
        <hr class="d-none d-xs-none d-lg-block" style={{ color: "white" }} />
      </div>
    );
  }
}

export default Categories;
