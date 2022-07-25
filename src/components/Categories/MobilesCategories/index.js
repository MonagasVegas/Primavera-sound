import React, { Component } from "react";
import "./index.css";

class MobilesCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
        <div class="row  d-lg-none ">
        <div class="accordion accordion-flush">
          <div class="accordion-item" style={{ background: "#111111" }}>
            <h2
              class="accordion-header"
              id="headingOne"
              style={{ color: "#FFFFFF" }}
            >
              <button
                class=" col-xs-12  btn btn-outline-light  accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  background: "#111111",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Ver todas las categorías
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="row ">
                  <div class="col-12 ">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-light"
                    >
                      Automoviles, barcos, aviones
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Artes escénicas y visuales
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Cine y medios de comunicación
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn  btn-sm  btn-outline-light"
                    >
                      Comunidad
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Deporte
                    </button>
                  </div>
                  <div>
                    <br />
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Espiritualidad
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Familia y educación
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Gastronomía
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Hogar y estilo de vida
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Moda
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Música
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Negocios
                    </button>
                  </div>
                  <div>
                    <br />
                  </div>
                </div>

                <div class="row ">
                  <div class="col-12 ">
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Pasatiempo
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Salud
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      class="btn btn-sm   btn-outline-light"
                    >
                      Solidaridad
                    </button>
                  </div>
                </div>
                <hr style={{ color: "white" }}></hr>
              </div>
            </div>
          </div>
        </div>
        <div>
            <br />
            <br />
            <br />
          </div>
      </div>
    );
  };
}

export default MobilesCategories;
