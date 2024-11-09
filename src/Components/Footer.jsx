import React from 'react'

function Footer() {
  return (
    <>
    <div className="container pt-5 ">
        <div className="row lh-lg">
            <div className="col-lg-4 col-md-4 col-sm-12 p-4">
                <div className="fct1-col1">
                    <h2 className='wrkhur'><em>Working Hours</em></h2>
                    <div className="fct1-col2 pt-4">
                       <p>Monday - Friday<br/>
                          09:00AM - 17:00PM</p>
                       <br/>                  
                      <p>Saturday - Sunday<br/>
                         Closed</p>
                    </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-10 col-md-12 col-sm-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-3 bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mx-3 bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                  </svg> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mx-3 bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mx-3 bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225                   0 7.225z"/>
                  </svg>                 
                  </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="fct2-col1 pt-4">
                <h2 className='cntinf'><em>Contact Info</em></h2>
              </div>
              <div className="fct2-col2 pt-4">
                <p>Email<br/>
                tagency@gmail.com</p>
                <p>Address<br/>
                1234 Street Name City-Name</p>
                <p>Phone Number<br/>
                (000) 123-456-789</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 pt-4">
            <h2 className='ornwltr'><em>Our Newsletter</em></h2>
              <div className="fct3-col1 pt-4">
                <form action="">
                  <input type='text' placeholder='Email'/>
                  <button className='btn bg-info opacity-50 ms-2 px-4 mb-1 text-light'>Send</button>
                </form>
              </div>
              <div className="fct3-col2 pt-3" >
                <p>"Let us handle all the planning and booking for your next adventure."</p>
              </div>
            </div>
        
    <hr/>
              <p className='text-center py-3'>Travel Agency © 2023. All Rights Reserved</p>
              </div>
              </div>
    </>
  )
}

export default Footer