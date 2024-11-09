import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'

import img1 from './Images/indeximg1.jpg'
import img2 from './Images/indeximg2.jpg'
import img3 from './Images/indeximg3.jpg'
import img4 from './Images/indeximg4.jpg'
import img5 from './Images/indeximg5.jpg'
import img6 from './Images/indeximg6.jpg'

import img11 from './Images/featureimg1.jpg'
import img12 from './Images/featureimg2.jpg'
import img13 from './Images/featureimg3.jpg'
import img14 from './Images/featureimg4.jpg'

import abtbg from './Images/abt-bg.webp'

function Destination() {

    const hght = {
        height: "100%"
    }
  return (
    <>
    <Header />
    <div className="container-fluid" style={{backgroundImage: `url(${abtbg})`,backgroundSize: "cover"}}>
      <div className="row" style={hght}>
          <div className="col1 text-center text-light py-5 my-5">
             <h1 className='dstin'>Destination</h1> 
             <a href="#" className='text-decoration-none text-light'>Home</a>
             <span className='bdet'>Destination</span>
          </div>
      </div>
    </div>

    <div className="container-fluid p-5">
        <div className="row">
            <div className="col-12 text-center py-4">
                <h2 className='dstin'>Destinations</h2>
                <p>Popular Holiday Travel Destinations</p>
            </div>
            <div className="row">
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
    </div>

    <div className="container-fluid p-5 bg-primary bg-opacity-10">
        <div className="row">
            <h1 className='fea-des pt-5 text-center'>Featured Destinations</h1>
            <p className='py-4 text-center'>There are some featured destinations for you</p>
                <div className="col-lg-3 col-md-6 col-sm-12">   
                   <div className="ct2-col py-4">
                      <div className="card">
                          <img src={img11} alt='' className='img-fluid'/>
                          <div className="h-padding">
                             <Link className='hd1 fs-4 text-decoration-none'>Nunc sceleraeisque   vieverra</Link>
                             <div className='lc pt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                                <Link className='ltc text-decoration-none ps-2'>India</Link>
                             </div>
                             <div className="row pt-3">
                                <div className="col-lg-6 col-md-6 col-sm-6 fw">
                                   <strong>$280</strong></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 tc ps-5">Per Person</div>
                             </div>  
                          </div>
                      </div>
                   </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="ct2-col py-4">
                    <div className="card">
                       <img src={img12} alt='' className='img-fluid'/>
                       <div className="h-padding">
                          <Link className='hd1 text-decoration-none fs-4 '>Maecenas ultri ciestitor rho</Link>
                          <div className='lc pt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                            <Link className='ltc text-decoration-none ps-2'>Greece</Link>
                          </div>
                          <div className="row pt-3">
                             <div className="col-lg-6 col-md-6 col-sm-6 fw">
                                <strong>$280</strong></div>
                             <div className="col-lg-6 col-md-6 col-sm-6 tc ps-5">Per Person</div>
                          </div>  
                       </div>
                    </div>
                  </div>
                </div>
              
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="ct2-col py-4">
                        <div className="card">
                            <img src={img13} alt='' className='img-fluid'/>
                            <div className="h-padding">
                               <Link className='text-decoration-none hd1 fs-4'>Dolor purreus consaequaet</Link>
                               <div className='lc pt-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                  <Link className='ltc text-decoration-none ps-2'>England</Link>
                               </div>
                               <div className="row pt-3">
                                  <div className="col-lg-6 col-md-6 col-sm-6 fw">
                                     <strong>$280</strong></div>
                                   <div className="col-lg-6 col-md-6 col-sm-6 tc ps-5">Per Person</div>
                               </div>       
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="ct2-col py-4">
                        <div className="card">
                            <img src={img14} alt='' className='img-fluid'/>
                            <div className="h-padding">
                               <Link className='hd1 text-decoration-none fs-4'>Tellus pellenteasque eumito</Link>
                               <div className='lc pt-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                  <Link className='ltc text-decoration-none ps-2'>Vietnam</Link>
                               </div>
                               <div className="row pt-3">
                                  <div className="col-lg-6 col-md-6 col-sm-6 fw">
                                     <strong>$280</strong></div>
                                   <div className="col-lg-6 col-md-6 col-sm-6 tc ps-5">Per Person</div>
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

export default Destination