/* eslint-disable react/style-prop-object */
/*Dependencies*/
import React, { Component, useState } from "react";

/*Constants*/
import './index.css';

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import Main from './img/Main.png';
import R from './img/R.png';
import UNO from './img/uno.png';
import L from './img/L.png';
import I from './img/I.png';
import V from './img/V.png';
import E from './img/E.png';

/*Components*/
import { PurchaseDetail } from "../PurchaseDetail";





class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            value: false,

        };
       
    }
    
   

/*Functions*/
 handleClick = () => {
 
   this.setState({value: true})

}

 handleClose = () =>{

     this.setState({value: false})
}

render(){



  return (
    

     <div class="container-fluid" style={{
        background: "linear-gradient(0deg, #111111 0%, rgba(0, 0, 0, 0.588231) 64.17%, rgba(0, 0, 0, 0) 85.42%)" }}  >
     
     

         {/* Contenedor1 */}
                
            <div class="container-fluid"  style={{  backgroundImage: `url(${Main})`, backgroundSize: "cover",  height: "100vh",}}>

<div class="row">
    {/* LOGO */}
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3  d-none d-sm-none d-lg-block">
        <img src={R} width="30px" alt="_alt"/>
        <img src={UNO} width="20px" alt="_alt"/>
        <img src={L} width="25px" alt="_alt"/>
        <img src={I} width="21px" alt="_alt"/>
        <img src={V} width="30px" alt="_alt"/>
        <img src={E} width="35x" alt="_alt"/>
    </div>

    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 "/>

    {/* box on mobile */}
    <div class="col-8 d-lg-none">
        <img src={R} width="15px" alt="_alt"/>
        <img src={UNO} width="10px" alt="_alt"/>
        <img src={L} width="14px" alt="_alt"/>
        <img src={I} width="12px" alt="_alt"/>
        <img src={V} width="15px" alt="_alt"/>
        <img src={E} width="16x" alt="_alt"/>
    </div>
    <div class="col-2 d-lg-none">
        <i class="bi bi-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </i>
    </div>
    <div class="col-2 d-lg-none" onClick={this.handleClose}>
        <i class="bi bi-person-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </i>
    </div>


    {/* SEARCH */}
    <div class="col-3 d-none d-sm-none d-lg-block ">
        <span style={{color: "#FFFFFF"}}>Buscar evento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="bi bi-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </i>

        </span>
        <hr></hr>
    </div>
    <div class="col-2 d-none d-sm-none d-lg-block">
        <button type="button" onClick={this.handleClose} class="btn btn-sm btn-outline-light">INGRESAR</button>&nbsp;&nbsp;
    </div>


</div>

        
        
      {/* Contenedor2 */}
<div class="container-fluid " style={{ marginTop:"210px"}}>
    <div><br/><br/></div>
    <div class="row  title">
        <div class="col-12 textWhite">
            <h6>7 Noviembre 2022 - 14:00 hs</h6>
        </div>
        <div class="col-12 textWhite ">
            <h1>
                Primavera sound
            </h1>
            <h1>Buenos Aires 2022</h1>
        </div>
    </div>

<div class="row">
    <div class="col-12 ">
        <button type="button" onClick={this.handleClick} class="btn2">
            MÁS INFORMACIÓN</button>
    </div>
    <div><br/></div>
    {this.state.value ?
    <div>
        <PurchaseDetail/>
    </div>
    :
                       ''
    
                     }
</div>


<div class="row">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3  ">
        <button style={{ background: "#FA008D", borderRadius: "5px 5px 5px 5px", width:"25px", height:"10px", border:"#FA008D", }}></button>&nbsp;&nbsp;
        <button style={{ background: "#555555", borderRadius:'50%', width:"10px", height:"10px", border:"#555555", }}></button>&nbsp;&nbsp;
        <button style={{ background: "#555555", borderRadius:'50%', width:"10px", height:"10px", border:"#555555", }}></button>&nbsp;&nbsp;
        <button style={{ background: "#555555", borderRadius:'50%', width:"10px", height:"10px", border:"#555555", }}></button>&nbsp;&nbsp;
        <button style={{ background: "#555555", borderRadius:'50%', width:"10px", height:"10px", border:"#555555", }}></button>&nbsp;&nbsp;
        <button style={{ background: "#555555", borderRadius:'50%', width:"10px", height:"10px", border:"#FA008D", }}></button>
    </div>

    <div class='col-xs-9 col-sm-9 col-md-9 col-lg-9 '/>

</div>

        </div>
    </div>


                
        {/* Contenedor3  */}
<div class="container-fluid" style={{ background: "linear-gradient(0deg, #111111 0%, rgba(0, 0, 0, 0.588231) 64.17%, rgba(0, 0, 0, 0) 85.42%)" }}>
    <div><br/><br/></div>

    <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6   d-none d-sm-none d-lg-block">

            <p>
                <span style={{color: "white", textDecorationLine: "underline" }}>Proximamente</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Este mes</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Gratuitos</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Deportes</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Música</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Solidaridad</span>
            </p>

        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6  d-lg-none">
            <p>
                <span style={{color: "white", textDecorationLine: "underline" }}>Proximamente</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Este mes</span>&nbsp;&nbsp;
                <span style={{color: "white" }}>Gratuitos</span>&nbsp;&nbsp;
            </p>
        </div>
        <div class='col-xs-6 col-sm-6 col-md-6 col-lg-6  '/>
    </div>


<div class="row  ">
    <div class=" col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
        <img src={img1} class="img" alt="_alt"/>
    </div>
    <div class="  col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
        <img src={img2} class="img" alt="_alt"/>
    </div>
    <div class=" col-md-2 col-lg-2 d-none d-sm-none d-lg-block">
        <img src={img3} class="img" alt="_alt"/>
    </div>
    <div class=" col-md-2 col-lg-2 d-none d-sm-none d-lg-block">
        <img src={img4} class="img" alt="_alt"/>
    </div>
    <div class=" col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
        <img src={img5} class="img" alt="_alt"/>
    </div>
    <div class=" col-md-2 col-lg-2  d-none d-sm-none d-lg-block">
        <img src={img6} class="img" alt="_alt"/>
    </div>

    <div><br/><br/></div>
</div>


 {/* Carrusel on mobile */}
<div class="row">
    <div id="carouselExampleControls" class="carousel slide col-xs-12 d-lg-none" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={img1} class="imgXs" alt="_alt"/>&nbsp;&nbsp;
                <img src={img2} class="imgXs" alt="_alt"/>
            </div>
            <div class="carousel-item">
                <img src={img3} class="imgXs" alt="_alt"/>&nbsp;&nbsp;
                <img src={img4} class="imgXs" alt="_alt"/>
            </div>
            <div class="carousel-item">
                <img src={img5} class="imgXs" alt="_alt"/>&nbsp;&nbsp;
                <img src={img6} class="imgXs" alt="_alt"/>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
<div><br/><br/></div>

         



<div class="row">
    <div class="d-grid gap-2 col-xs-6 col-sm-6 col-md-6 col-lg-6 mx-auto">
        <button type="button" class="btn btn-outline-light">VER TODOS</button>
        <br/><br/><br/>
    </div>
</div>


            {/* Contenedor4 */}
<div class="container-fluid">
    <div class="row textWhite d-none d-xs-none d-lg-block">
        <div class="col-12">
            <h5>Categorías</h5>
        </div><br/><br/>
    </div>

            
<div class="row d-none d-xs-none  d-lg-block ">
    <div class="col-12 ">
        <button type="button" class="btn btn-sm btn-outline-light">Automoviles, barcos, aviones</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Artes escénicas y visuales</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Cine y medios de comunicación</button>&nbsp;&nbsp;
        <button type="button" class="btn  btn-sm  btn-outline-light">Comunidad</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Deporte</button>
    </div>
    <div><br/></div>
</div>

<div class="row d-none d-xs-none d-lg-block ">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
        <button type="button" class="btn btn-sm   btn-outline-light">Espiritualidad</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Familia y educación</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Gastronomía</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Hogar y estilo de vida</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Moda</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Música</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Negocios</button>

    </div>
    <div><br/></div>
</div>

<div class="row d-none d-xs-none d-lg-block">
    <div class="col-12 ">
        <button type="button" class="btn btn-sm   btn-outline-light">Pasatiempo
        </button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Salud</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Solidaridad</button>
    </div>
</div>

<hr class="d-none d-xs-none d-lg-block" style={{color: "white"}}></hr>


<div class="row d-none d-xs-none d-lg-block ">
    <div class="col-3">
        <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"27px", height:"27px", border:"#FFFFFF" }}>
            <i class="bi bi-instagram ">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#111111" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
            </i>
        </button>&nbsp;&nbsp;
        <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"27px", height:"27px", border:"#FFFFFF" }}>
            <i class="bi bi-facebook ">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#111111" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
            </i>
        </button>&nbsp;&nbsp;
        <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"27px", height:"27px", border:"#FFFFFF" }}>
            <i class="bi bi-twitter ">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#111111" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
            </i>
        </button>&nbsp;&nbsp;
        <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"27px", height:"27px", border:"#FFFFFF" }}>
            <i class="bi bi-youtube  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#111111" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
            </i>
        </button>
    </div>

    <div class="col-9 ">
        <p>
            <span style={{color: "white", fontSize: 10 }}>Términos y condiciones</span>&nbsp;&nbsp;&nbsp;
            <span style={{color: "white", fontSize: 10 }}>Privacidad</span>&nbsp;&nbsp;&nbsp;
            <span style={{color: "white", fontSize: 10 }}>Ayuda</span>&nbsp;&nbsp;&nbsp;
            <span style={{color: "white", fontSize: 10 }}>© R1 2022</span>
        </p>
    </div>
</div>


                 {/* Box on mobile */}
<div class='row  d-lg-none '>
    <div class="accordion accordion-flush">
        <div class="accordion-item" style={{background:"#111111"}}>
            <h2 class="accordion-header" id="headingOne" style={{ color:"#FFFFFF"}}>
                <button class=" col-xs-12  btn btn-outline-light  accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background:"#111111", color:"white", fontSize: 20}}>
                    Ver todas las categorías
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">

<div class="row ">
    <div class="col-12 ">
        <button type="button" class="btn btn-sm btn-outline-light">Automoviles, barcos, aviones</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Artes escénicas y visuales</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Cine y medios de comunicación</button>&nbsp;&nbsp;
        <button type="button" class="btn  btn-sm  btn-outline-light">Comunidad</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Deporte</button>
    </div>
    <div><br/></div>
</div>

<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12   ">
        <button type="button" class="btn btn-sm   btn-outline-light">Espiritualidad</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Familia y educación</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Gastronomía</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Hogar y estilo de vida</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Moda</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Música</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Negocios</button>

    </div>
    <div><br/></div>
</div>


<div class="row ">
    <div class="col-12 ">
        <button type="button" class="btn btn-sm   btn-outline-light">Pasatiempo
        </button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Salud</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-sm   btn-outline-light">Solidaridad</button>
    </div>
</div>
<hr style={{color: "white"}}></hr>

</div></div></div></div></div><div><br/><br/><br/></div>

<div class='row  d-lg-none  '>
    <div class="col-6 ">
        <img src={R} width="20px" alt="_alt"/>
        <img src={UNO} width="15px" alt="_alt"/>
        <img src={L} width="18px" alt="_alt"/>
        <img src={I} width="14px" alt="_alt"/>
        <img src={V} width="21px" alt="_alt"/>
        <img src={E} width="24x" alt="_alt"/>
    </div>

            
<div class="col-6 ">
    <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"25px", height:"26px", border:"#FFFFFF" }}>
        <i class="bi bi-instagram ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#111111" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
        </i>
    </button>&nbsp;&nbsp;
    <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"25px", height:"26px", border:"#FFFFFF" }}>
        <i class="bi bi-facebook ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#111111" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
        </i>
    </button>&nbsp;&nbsp;
    <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"25px", height:"26px", border:"#FFFFFF" }}>
        <i class="bi bi-twitter ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#111111" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
        </i>
    </button>&nbsp;&nbsp;
    <button style={{ background: "#FFFFFF", borderRadius:'50%', width:"25px", height:"26px", border:"#FFFFFF" }}>
        <i class="bi bi-youtube  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#111111" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>
        </i>
    </button>
</div></div>

     <div><br/><br/></div>
<div class='row  d-lg-none  '>
    <div class="col-xs-6 ">
        <p>
            <span style={{color: "#B3BCC6" }}>Términos y condiciones</span>&nbsp;&nbsp;&nbsp;
            <span style={{color: "#B3BCC6" }}>Privacidad</span>&nbsp;&nbsp;&nbsp;
            <span style={{color: "#B3BCC6" }}>Ayuda</span>&nbsp;&nbsp;&nbsp;
        </p>
    </div>
    <div class="col-xs-6  "/>
    <div class="col-xs-6 ">
        <p>
            <span style={{color: "white", fontSize: 15 }}>© R1 2022</span>
        </p>
    </div>
    <div class="col-xs-6"/>
</div>
</div></div></div>
);

}}

export default Home;













