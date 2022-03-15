/*Dependencies*/
import React from "react";

/*Constants*/
import './index.css';
import IMAG from './img/Secondary.png';









export function PurchaseDetail() {
  

/*Functions*/



  return (
    <>
        <div class=" d-grid gap-2 col-12 mx-auto" > 
             <button type="button" class="btn btn-outline-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{
    
                color:"white",
                background: "#FA008D",
                border: "#FA008D"
                }}>
                Descubre más
                </button>
                        
        </div>



    <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" >
      <div class="modal-content">
      <div class="modal-body">

   

    
{/* //Contenedor 1  */}
        <div class="container-fluid"  >
        <div class="row" >

                <div class='col-xs-12 d-lg-none '  style={{ background:"#111111", borderRadius:'5px 5px 0px 0px' , width:"363px", marginLeft: "12px" }}  > 
                    <h6  align="center"   style={{ padding: "2px",  color: "white"}}>7 Noviembre 2022 - 14:00 hs</h6>
                </div>

            {/* box uno */}
                 <div class='col-xs-6 col-sm-6 col-md-6 col-lg-6' >
                    <img src={IMAG}  class="img-fluid rounded"  alt="_alt"/>
                 </div>
                 
                    

            {/* box two */}
             <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"  >

                <div class="row" >  
                    <div class="col-7 d-none d-sm-none d-md-block" style={{ background:"#111111", borderRadius:'0px 0px 10px 10px'  }}    >
                        <h6   align="center"  style={{ padding: "2px",  color: "white"}}  >7 Noviembre 2022 - 14:00hs</h6>
                    </div>
                    <div class='col-5'><br/></div>
                </div>
              

                <div class="row"  > 
                <div><br/></div> 
                    
                    <div class="col-9 col-xs-9" >
                        
                        <h6>Musica</h6>
                    </div>
                    <div class="col-3  col-xs-3  d-lg-none" >
                        <button
                           style={{
                            background: "#FA008D",
                            borderRadius:'50%',
                            width:"25px",
                            height:"25px",
                            border:"#FA008D" 
                           }}
                        >

                        <i class="bi bi-share-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFFFFF" class="bi bi-share-fill" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                            </svg>
                        </i>

                        </button>
                    </div>
                </div>

                <div class="row" > 
                    <div class="col"    >
                        <h1><strong>Primavera sound</strong><br/><strong>Buenos Aires 2022</strong></h1>
                        
                         
                    </div> 
                </div>

                <div class="row"   > 
                    <div class="col text  " >
                    <p>
                    La edición argentina de Primavera Sound se celebrará por primera vez del 7 al 13 de noviembre,
                    como un nuevo concepto de festival urbano.
                    El festival sonará en todos los rincones de Buenos Aires, 
                    con shows en los lugares más icónicos de la ciudad durante la semana, 
                    y las jornadas principales serán en el Parque de Los Niños.
                    </p>
                    </div> 
                </div>

                <div class="row" > 
                    <div class="col-12  " >
                      <button class="btn1">COMPRAR</button>
                     </div>
                     <div><br/></div>
                    <div class="col-12 comment" >
                      <h6 >Añadir al calendario</h6>
                     </div>
                </div>
         </div>

        </div>
    </div>

    <div class="container-fluid"><br/><br/></div>

{/* Contenedor 2 */}
        <div class="container-fluid"  >
            
           
                <div class="row" >  
                    {/* box uno */}
                    <div  class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="row" >  
                    <div class="col" >
                        <h4>Subtitulo evento</h4>
                    </div>
                </div>
                <div class="row"    >  
                    <div class="col text2" >
                       <p>
                       Escala a escala, Primavera Sound continúa su camino por el mundo: sean cuales sean las coordenadas donde se celebre,
                        el espíritu disruptivo e innovador alimentado por el festival de Barcelona durante 19 ediciones se mantiene intacto. 
                        Esta  identidad única también llegará en 2022 hasta Argentina, que dará la bienvenida a Primavera Sound Buenos Aires del 7 al 13 de noviembre. Un nuevo concepto de festival urbano coproducido por DF Entertainment que, 
                        en concordancia con cada aventura internacional de Primavera Sound, buscará integrarse con su entorno para enriquecer el ecosistema cultural de Buenos Aires. Para conseguirlo, 
                        repartirá su actividad entre varios espacios de la ciudad durante la semana y trasladará su programación al Parque de los Niños el fin de semana.


                       </p>
                    </div>
                </div>
                <div class="row"    >  
                    <div class="col  text2" >
                        <p>
                        Se amplía así la llegada de Primavera Sound a este lado del Atlántico, 
                        tras haber confirmado paradas en Los Ángeles y Santiago de Chile. 
                        Las tres citas en territorio americano, sumadas a los festivales de Barcelona y Porto, 
                        siguen completando un trayecto musical que en 2022 conectará algunas de las principales ciudades del planeta para entender qué está pasando en la música de hoy desde el inconfundible prisma Primavera.

                        </p>
                    </div>
                </div>
                <div class="row"    >  
                    <div class="col  text2" >
                        <p>
                        Con este nuevo viaje transoceánico, Primavera Sound exportará los pilares básicos que,
                         después de 19 ediciones, distinguen al  festival de Barcelona: sustentabilidad , 
                         igualdad de género, compromiso social e integración urbanística.
                          Unos valores inquebrantables que garantizan que el impacto de Primavera Sound como comunidad de alcance internacional va más allá de lo estrictamente musical.

                        </p>
                    </div>
                </div>
                <div class="row "   >  
                             <div class="col-1" >
                                 <button
                                   style={{
                                    background: "#FA008D",
                                    borderRadius:'50%',
                                    width:"28px",
                                    height:"28px",
                                    border:"#FA008D" 
                                   }}
                                 
                                 >
                                <i class="bi bi-instagram ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#FFFFFF" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                </i>
                                 </button>
                            </div>
                            <div class="col-1">
                            <i class="bi bi-facebook ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FA008D" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </i>
                            </div>
                            <div class="col-1"  >
                            <button
                            style={{
                                background: "#FA008D",
                                borderRadius:'50%',
                                width:"28px",
                                height:"28px",
                                border:"#FA008D" 
                               }}
                            
                            >
                            <i class="bi bi-twitter ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </i>
                            </button>
                            </div>
                            <div class="col-1" >
                                <button
                                style={{
                                    background: "#FA008D",
                                    borderRadius:'50%',
                                    width:"28px",
                                    height:"28px",
                                    border:"#FA008D" 
                                   }}
                                
                                >
                                <i class="bi bi-youtube  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                    </svg>
                                </i>
                                </button>
                            </div>
                            <div class="col-7" />  
                            <div><br/><br/></div>
                </div>

             </div>



                   
                    {/* box two */}
                    <div  class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="row"    >  
                    <div class="col subtitle" >
                       <h5>Valor de los tickets</h5>
                    </div>
                   </div>
                   <div class="row" > 
                    <div class="col box"    >
                        <h6 class="title"><strong style={{color: "#FA008D"}}>$2.75 </strong>Daily Class Access</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                    </div> 
                    <div><br/></div>
                </div>
                <div class="row"> 
                    <div class="col box"    >
                    <h6 class="title"><strong style={{color: "#FA008D"}}>$9.99 </strong>Weekly Access</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                    </div> 
                    <div><br/></div>
                </div>
                <div class="row" > 
                    <div class="col box"    >
                        <h6 class="title"><strong  style={{color: "#FA008D"}}>$19.99 </strong>Monthly Subscription</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                    </div> 
                    <div><br/></div>
                </div>
                <div class="row" > 
                    <div class="col box"    >
                        <h6 class="title"><strong style={{color: "#FA008D"}} >$189.99 </strong>Yearly Subscription</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                    </div> 
                    <div><br/></div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 "  style={{ border: "1px solid #FFFFFF",  alignItems: "flex-start",    borderRadius: "25px", background:"#FFFFFF"  }}>
                    <div class="row" > 
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 textColor "    >
                            <h5>Importante</h5>
                            
                        </div> 
                    </div>
                    <div class="row" > 
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12      text3"    >
                            <p> Una vez efectuada la compra, recibirás por correo electrónico el link para acceder al evento. </p>
                            <p>
                            También puedes acceder al show desde la sección "Mis Tickets" en tu perfil de usuario.
                            </p>
                            <p>
                            No puedes comprar más de un ticket por evento. El show sólo puede ser visto con la cuenta que ha pagado.
                            </p>
                            <p>Los tickets no son transferibles. </p>
                        </div> 
                    </div>
                </div>


          
              
                    </div>
                </div>

        </div>


                


</div>
    </div>
        </div>
          </div>
     

</>

  );
}
