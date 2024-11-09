import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

import abtbg from './Images/abt-bg.webp'

function Contact() {
  return (
    <>
    <Header />
    <div className="container-fluid py-5 mb-5" style={{backgroundImage: `url(${abtbg})`,backgroundSize: "cover"}}>
      <div className="row">
        <div className="col text-center text-light py-5 lh-lg">
            <h1 className='contu'>Contact Us</h1> 
            <a href="#" className='text-decoration-none text-light'>Home</a>
            <span className='bctus'>Contact Us</span>
        </div>
      </div>
    </div>

    <div className="container-fluid py-5 my-5">
       <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ps-5">
              <h2 className="frequent text-center fadeInUp">People Usually Ask These</h2>
                <div className="accordion fadeInUp" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        How Can I Cancel My Order?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
       
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Why is My Registration Delayed?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
       
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        What do I Need to Buy Products?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        How Can I Track an  Order?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapsefour" className="accordion-collapse collapse">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        How CCan I Get Money Back?
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div> 
          </div>

              <div className="col-lg-6 col-md-6 col-sm-12 ps-4">
                  <div className="formm">
                     <form>
                        <h2 className='suam ps-4 fadeInUp'>Send Us a Message</h2>
                        <p className='ps-4 pt-3 fadeInUp'>If you have any query you can send us a message.</p>
                        <div className="mb-3 p-4 fadeInUp">
                           <input type="name"className="form-control form-control-lg fom my-4" id="exampleInputEmail1" placeholder="Your Name..." aria-describedby="emailHelp placeholder-name" />
                            <input className="form-control form-control-lg fom my-4" type="text" placeholder="Your Email..." aria-label=".form-control-lg example" />
                            {/* <input className="form-control form-control-lg fom" type="text" placeholder="Subject" aria-label=".form-control-lg example" /> */}
                            <textarea className="form-control form-control-lg fom my-4" id="exampleFormControlTextarea1" placeholder="Your Comment..." rows="3"></textarea>
                            <button type="submit" class="btn btn-primary fom px-5 my-4 fadeInUp">Your Message</button>
                        </div>
                     </form> 
                  </div>
              </div>
       </div>
    </div>

    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mapp py-5"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2335421.8462325362!2d75.69636208185842!3d31.097778495482345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716372542451!5m2!1sen!2sin" style={{width:'100%' , height:'100%'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mpp"></iframe></div>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default Contact