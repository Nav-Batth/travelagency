import React from 'react'
import Header from './Components/Header'
import img1 from './Images/indeximg1.jpg'
import img2 from './Images/indeximg2.jpg'
import img3 from './Images/indeximg3.jpg'
import img4 from './Images/indeximg4.jpg'
import img5 from './Images/indeximg5.jpg'
import img6 from './Images/indeximg6.jpg'
import bodyimg2 from './Images/bodyimg2.png'

import client1 from './Images/client1 (1).jpg'
import client2 from './Images/client2 (1).jpg'
import client3 from './Images/client3 (1).jpg'

import hbg from './Images/home1bg.webp'

import { Link } from 'react-router-dom'
import Footer from './Components/Footer'

import './App.css'

function Home() {


    const hight = {
        height: "100%"
    }
     const style = {
        marginTop: '10%'
         
     }         
    
  return (
    <>
    <Header />
    <div className="container-fluid pt-5" style={{backgroundImage: `url(${hbg})`,
                 backgroundSize: "cover"
         }}>
        <div className="row" style={hight}>
           <div className="slideInLeft offset-lg-3 col-lg-6 offset-lg-3  text-center pt-5">
             <div className="col1 text-light mt-5 fs-5 bg-secondary bg-opacity-50">
                <p>CONTACT US TO GET EXCITING TRAVEL PLANS</p>
            </div>
            <div style={style} className='ct1-col2 text-light pb-5'>
               <p>LUXURY DESTINATIONS</p>
            </div>
           </div>
        </div>
    </div>

    <div className="container pt-5 my-5 bg-body-tertiary">
        <div className="row">
            <div className="slideInDown col-12 text-center">
                <h3 className='dstin py-3 fs-1'>Destinations</h3>
                <p>Popular Holiday Travel Destinations</p>
            </div> 

            <div className="col-lg-4 col-md-6 col-sm-12">
               <div className='pulse'>
                   <div className="ct2-col py-4">
                       <div className="card my-3">
                           <img src={img1} alt='' className='ct2-img'/>
                           <div className="h-padding">
                              <Link className='hd1 py-4 text-decoration-none'>Hyatt centri time square sim sod</Link>
                               <div className='lc pt-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                  </svg>
                                <Link className='ltc text-decoration-none ps-2'>Australia</Link>
                              </div>
                              <div className="row pt-3 t">
                                 <div className="col-lg-6 col-md-6 col-sm-6 fw">$135</div>
                                 <div className="col-lg-6 col-md-6 col-sm-6 ps-5 tc opacity-75 ">Per Person</div>
                              </div>
                          </div>
                       </div>
                   </div>
               </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="ct2-col pulse py-4">
                    <div className="card my-3">
                        <img src={img2} alt=''/>
                        <div className="h-padding">
                           <Link className='hd1 py-4 text-decoration-none'>Pretium aenean pharetra magna</Link>
                           <div className='lc pt-3'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                               <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                             </svg>
                             <Link className='ltc text-decoration-none ps-2'>Norway</Link>
                           </div>
                           <div className="row pt-3">
                              <div className="col-lg-6 col-md-6 col-sm-6 fw">$128</div>
                              <div className='col-lg-6 col-md-6 col-sm-6 ps-5 tc'>Per Person</div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="ct2-col pulse py-4">
                    <div className="card my-3">
                        <img src={img3} alt=''/>
                        <div className="h-padding">
                            <Link className='hd1 py-4 text-decoration-none'>Hac habitasse platea dictumst iesma</Link>
                            <div className='lc pt-3'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                               </svg>
                               <Link className='ltc text-decoration-none ps-2'>Poland</Link>
                            </div>
                            <div className="row pt-3">
                               <div className="col-lg-6 col-md-6 col-sm-6 fw"><strong>$232</strong></div>
                               <div className='col-lg-6 col-md-6 col-sm-6 ps-5 tc'>Per Person</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="ct2-col pulse py-4">
                    <div className="card my-3">
                        <img src={img4} alt=''/>
                        <div className="h-padding">
                           <Link className='hd1 py-4 text-decoration-none'>Etiam non quam lacus suspen disse</Link>
                           <div className='lc pt-3'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                              </svg>
                              <Link className='ltc text-decoration-none ps-2'>Vietnam</Link>
                           </div>
                           <div className="row pt-3">
                              <div className="col-lg-6 col-md-6 col-sm-6 fw"><strong>$321</strong></div>
                              <div className='col-lg-6 col-md-6 col-sm-6 ps-5 tc'>Per Person</div>
                           </div>   
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
               <div className="ct2-col pulse py-4">
                  <div className="card my-3">
                     <img src={img5} alt=''/>
                     <div className="h-padding">
                         <Link className='hd1 py-4 text-decoration-none'>Non arcu risus quis varius quam</Link>
                         <div className='lc pt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                               <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                            <Link className='ltc text-decoration-none ps-2'>Turkey</Link>
                         </div>
                         <div className="row pt-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 fw"><strong>$280</strong></div>
                            <div className='col-lg-6 col-md-6 col-sm-6 ps-5 tc'>Per Person</div>
                         </div>
                     </div>
                 </div>
               </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
               <div className="ct2-col pulse py-4"> 
                    <div className="card my-3">
                        <img src={img6} alt=''/>
                        <div className="h-padding">
                           <Link className='hd1 py-4 text-decoration-none'>Amet consectetur adipsg elit pell</Link>
                           <div className='lc pt-3'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                              </svg>
                              <Link className='ltc text-decoration-none ps-2'>Indonesia</Link>
                           </div>
                           <div className="row pt-3">
                              <div className="col-lg-6 col-md-6 col-sm-6 fw"><strong>$341</strong></div>
                              <div className='col-lg-6 col-md-6 col-sm-6 ps-5 tc'>Per Person</div>
                           </div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    </div>
        

    <div className="container-fluid bg-secondary bg-opacity-10">
        <div className="row py-5 ms-4">
            <div className="col-lg-7 ">
                <div className="ct3-col1">
                    <div className="pulse">
                       <img src={bodyimg2} alt="" className='bodyimg-2 px-5 ms-4'/>
                    </div>
                </div>
            </div>

            <div className="col-lg-5">  
                <div className="cy3-col2 p-5" style={style}>
                  <p className='hfw pulse pt-5 pb-5 pb-3 h1'>Planning For a Holiday Resort?</p>
                  <p className='fs-3 slideInDown'>Contact Us to Get Exciting Travel Plans</p>
                  <p className='py-5 fs-5 slideInDown lh-base'>We often offer a range of activities, such as water sports, fitness classes, and cultural experiences, pools, spas, restaurants, 
                      and bars, providing guests with everything that need for a comfortable and enjoyable stay.</p>
                      <div className="fadeInDown">
                          <button className='hbtn py-2 px-3 my-5'>View Packages</button>
                          <button className="video-button">
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 24 24"
                               width="24" height="24"
                               fill="currentColor"
                             >
                               <path d="M8 5v14l11-7z"></path>
                             </svg>
                          </button>
                      </div>  
                </div>           
             </div>
        </div>
    </div>

    <div className="container text-center bg-body-tertiary">
        <div className="row ps-4">
           <h2 className='py-5 fadeInDown cli-hp'>Clients's Happiness</h2>
           <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card me-4 cli-hpi fadeInDown">
                   <img src={client1} alt='' className='img-fluid rounded-circle mx-auto m-5 ' style={{width: '40%'}} />
                   <p className='px-5'>Highly recommended. We requested a couple of changes between booking and our trip, nothing was too much trouble. Thank you!</p>
                   <h4 className='pt-2'>Mary Ann</h4>
                   <p className='pb-5'>Customer</p>
                </div>
            </div>  

            <div className="col-lg-4 col-md-6 col-sm-12">    
                <div className="card me-4 cli-hpi fadeInDown">
                    <img src={client2} alt="" className='img-fluid rounded-circle mx-auto m-5' style={{width: '40%'}} />
                    <p className='px-5'>Great, friendly service. Easy to with and trip itinerary ran smoothly, including all transfers. Would happily choose Travel Online to book our next trip.</p>
                    <h4 className='pt-2'>Rodnet Stratton</h4>
                    <p className='pb-5'>Customer</p>
                </div>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-12">
                <div className="card me-4 cli-hpi fadeInDown">
                    <img src={client3} alt="" className='img-fluid rounded-circle mx-auto m-5' style={{width: '40%'}} />
                    <p className='px-5'>I had never bought one of these holiday packages and was amazing at how easy it was! Everything was included, and exactly what was promised to us.</p>
                    <h4 className='pt-2'>Polina Gagarina</h4>
                    <p className='pb-5'>Customer</p> 
                </div>
            </div>
        </div>
    </div>

    <div className="container py-5 bg-body-tertiary mt-5">
        <div className="row ms-2">
            <div className="offset-lg-3 col-lg-6 offset-lg-3 text-center pt-4 pb-2 fadeInDown">
               <h2 className='py-3 wpcu'>Why People Choose Us?</h2> 
               <p className='lh-lg'>We sell hundreds of holiday packages each week co-ordinating flights, transfers, tours and helping you choose the right hotel for your needs.</p>
            </div>
            <div className="row py-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className='bg-warning text-light p-3 fs-5 fadeInLeft  fw-bold'>
                       <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 20, width: 20 }} fill="currentColor" className="bi bi-airplane-engines" viewBox="0 0 16 16">
                          <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z"/>
                       </svg>
                       <p>Flight Tickets</p>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className='bg-warning text-light p-3 fs-5 fadeInLeft  fw-bold'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
                         <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                       </svg>
                       <p>Hotel Reservatio</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className='bg-warning text-light p-3 fs-5 fadeInLeft  fw-bold'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                         <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                       </svg>
                       <p>Travel Guides</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <div className='bg-warning text-light p-3 fs-5 fadeInLeft  fw-bold'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16">
                         <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                         <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
                       </svg>
                       <p>Trip Actvies</p>
                   </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container mb-5">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="fadeInRight">
                   <div style={{backgroundImage: `url(${hbg})`,backgroundSize: "cover" }}>
                       <div className="row"> 
                          <div className="d-flex justify-content-end text-light" >
                             <div className=" col-lg-5 bg-primary bg-opacity-50 p-5">
                                 <p>“So thrilled with the organisation of this trip, awesome communication and all went to plan.Perfect pick ups, transfers and paperwork, enjoyed our holiday 100% and it is always comforting to know your travel agent is professional providing great customer service. We have booked several Travel Online trips, all with the same favorable outcome so will continue to do so in the future as our travel plans evolve. Highly Recommend this Agent. Thank you for making our holiday stress free.”</p>
                                 <p className='text-warning py-2'>Rodnet Stratton</p>
                                 <p>Customer</p>
                             </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <Footer /> 
    </>
  )
}

export default Home