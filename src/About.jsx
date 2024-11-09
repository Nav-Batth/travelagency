import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import abtimg1 from './Images/about-img1.jpg'
import client1 from './Images/client1.jpg'
import client2 from './Images/client2.jpg'

import tabt1 from './Images/travelabt1.png'
import tabt2 from './Images/travelabt2.png'
import tabt3 from './Images/travelabt3.png'
import tabt4 from './Images/travelabt4.png'

import abtbg from './Images/abt-bg.webp'

function About() {

    const heigh = {
      height: "100%"
    }

  return (
    <>
    <Header />
    <div className="container-fluid py-5" style={{backgroundImage: `url(${abtbg})`,backgroundSize: "cover"}}>
      <div className="row" style={heigh}>
        <div className="col text-center text-light py-5 my-5">
          
            <h1 className='abu'>About Us</h1> 
            <a href="#" className='text-decoration-none text-light'>Home</a>
            <span className='beau'>About Us</span>
        </div>
      </div>
    </div>
    

    <div className="container-fluid p-5">
      <div className="row p-3">
        <div className="offset-lg-1 col-lg-10 offset-lg-1">
           <h2 className='tgty pt-5 fadeInDown'>Travel Guides That You Will Be Thrilled</h2>
           <p className='p-3 fadeInDown'>Travel guides have extensive knowledge of the places they cover and can offer valuable 
             insights into local customs, culture, and history that can enhance the travel experience.</p>
             <div className="ct2-col1 lh-lg py-4 px-5 fadeInDown">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi text-danger bi-check-lg" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                   </svg>   Travel guides can help travelers save time by providing pre-planned itineraries and suggestions for the best sights to see, restaurants to try, and activities to do, without having to spend hours researching.
                </p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi text-danger bi-check-lg" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                   </svg> Travel guides can help keep travelers safe by providing tips and advice on avoiding scams, dangerous neighborhoods, and other potential hazards.
                </p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi text-danger bi-check-lg" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                   </svg> Travel guides can also be helpful for travelers who do not speak the local language, providing translation services and helping navigate local customs.
                </p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi text-danger bi-check-lg" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                   </svg> Travel guides can arrange accommodations, transportation, and other travel logistics, making the process more convenient and hassle-free for travelers.
                </p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi text-danger bi-check-lg" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                   </svg> Some travel guides have access to exclusive experiences, such as private tours or special events, that may not be available to individual travelers
                </p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi text-danger bi-check-lg" viewBox="0 0 16 16">
                     <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                   </svg> Many travel guides offer customized itineraries and personalized experiences that can be tailored to individual preferences and interests.
                </p>
             </div>
        </div>
      </div>
    </div>

    <div className="container-fluid py-5">
      <div className="row">
          <div className="col-lg-8">
              <div className="img-fluid">
                <img src={abtimg1} alt=''  className='img-fluid ps-5 fadeInDown'/>
              </div>
              <div className="row text-center px-5 pt-4 fadeInDown">
                 <div className="col-lg-4 col-md-4 col-sm-6 py-5">
                   <h1 className='nmbs text-danger opacity-50'>1126+</h1>
                   <p className='hpcm'>Happy Customers</p>
                 </div>
                 <div className="col-lg-4 col-md-4 col-sm-6 py-5">
                   <h1 className='nmbs text-danger opacity-50'>25+</h1>
                   <p className='hpcm'>Years of Experience</p>
                 </div>              
                 <div className="col-lg-4 col-md-4 col-sm-6 py-5">
                   <h1 className='nmbs text-danger opacity-50'>223+</h1>
                   <p className='hpcm'>Flight Tickets</p>
                 </div>           
              </div>
              <div className="para1 p-5 fadeInDown">
                <p>Once you have decided on a travel itinerary, we will handle all the logistics of your trip, including booking flights, accommodations, transportation, and tours.We also provide you with travel insurance and assist you with obtaining visas or other travel documents.</p> <br/>
                <p>During your trip, we provide 24/7 support to ensure that your trip goes smoothly. If any issues arise, such as flight cancellations or changes in your itinerary, we will work to resolve them on your behalf.</p>                
              </div>   
          </div>
          <div className="col-lg-4">
            <div className="clients text-center p-5 fadeInDown">
              <div className="card">
                  <img src={client1} alt='' className='img-fluid rounded-circle mx-auto py-4' style={{width: '40%'}}/>
                  <p className='px-5'>Highly recommended. We requested a couple of changes between booking and our trip, nothing was too much trouble. Thank you!</p>
                  <h2 className='rdst'>Mary Ann</h2>
                  <p>Customer</p>
              </div>
            </div>
            <div className="client text-center p-5 fadeInDown">
              <div className="card">
                 <img src={client2} alt='' className='img-fluid py-4 mx-auto rounded-circle' style={{width: '40%'}}/>
                 <p className='px-5'>Great, friendly service. Easy to deal with and trip itinerary ran smoothly, including all transfers. Would happily choose Travel Online to book our next trip.</p>
                 <h2 className='rdst'>Rodnet Stratton</h2>
                 <p>Customer</p> 
              </div>
            </div>
          </div>
      </div>
    </div>

      <div className="container-fluid bg-dark p-5">
          <div className="row">
            <div className="par text-light text-center py-5 fadeInDown">
               <h1 className='mpiu'>Many Partners Invest Us</h1>
               <p>Some big companies investing in us</p>
            </div>
          </div>
          <div className="row p-4">
             <div className="col-3 bounceIn">
               <img src={tabt1} alt='' className="img-fluid" />
             </div>
             <div className="col-3 bounceIn">
                <img src={tabt2} alt='' className="img-fluid" />
             </div>
             <div className="col-3 bounceIn">
                <img src={tabt3} alt='' className="img-fluid" />
             </div>
             <div className="col-3 bounceIn">
                <img src={tabt4} alt='' className="img-fluid" />
             </div>
          </div>   
      </div>
    <Footer />
    </>
  )
}

export default About