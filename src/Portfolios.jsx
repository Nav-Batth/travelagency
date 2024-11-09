import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

import img1 from './Images/portfolioimg1.jpg'
import img2 from './Images/portfolioimg2.jpg'
import img3 from './Images/portfolioimg3.jpg'
import img4 from './Images/portfolioimg4.jpg'
import img5 from './Images/portfolioimg5.jpg'
import img6 from './Images/portfolioimg6.jpg'

import abtbg from './Images/abt-bg.webp'

function Portfolios() {
  return (
    <>
    <Header />
    <div className="container-fluid py-5 mb-5" style={{backgroundImage: `url(${abtbg})`, backgroundSize: "cover"}}>
      <div className="row">
        <div className="col text-center text-light py-5 lh-lg">
            <h1 className='prtfs'>Portfolios</h1> 
            <a href="#" className='text-decoration-none text-light'>Home</a> 
            <span className='bprt'>Portfolios</span>
        </div>
      </div>
    </div>
    

    <div className="container py-5 bg-body-tertiary ">
      <div className="row ps-5">
        
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img1} alt='' className='img-fluid py-3 zoomIn'/>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img2} alt='' className='img-fluid py-3 zoomIn' />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img3} alt='' className='img-fluid py-3 zoomIn' />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img4} alt='' className='img-fluid py-3 zoomIn' />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img5} alt='' className='img-fluid py-3 zoomIn' />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img6} alt='' className='img-fluid py-3 zoomIn' />
          </div> 
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default Portfolios