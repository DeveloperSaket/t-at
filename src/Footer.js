import React from "react";

const Footer = () => {
  return (
    <>
      <footer>

      <div className="main-content">
        <div className="left box">
          <h2>Contact Us</h2><br></br>
          <div class="content">
            <p> Ask us anything! We’re here to <br></br>answer any questions you have. <br></br><br></br>
                Email: info@mysite.com</p><br></br><br></br>
                <div className="mt-5">
                <p className="main-hero-para  w-100">
                  Copyright @ 2021 Akshay. All rights reserved.
                </p>
              </div>
          </div>
        </div>
        <div class="center box">
          <h2>Follow Us</h2><br></br>
          <div class="content">
            <div class="social">
              <a href="https://facebook.com/coding.np"><span class="fab fa-facebook-f"></span></a>
              
              <a href="https://instagram.com/coding.np"><span class="fab fa-instagram"></span></a>
              <a href="https://youtube.com/c/codingnepal"><span class="fab fa-youtube"></span></a>
            </div>
            </div>
          </div>
          <div class="right box">
          <h2>Contact us</h2><br></br>
          <div class="content">
            {/* <form action="#">
              <div class="email">
                <div class="text">Email *</div>
                <input type="email" required>
              </div>
              <div class="msg">
                <div class="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div class="btn">
                <button type="submit">Send</button>
              </div>
            </form> */}
          </div>
        </div>
    
      </div>

        {/* </div> */}
      



        {/* <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Contact Us</h2>
                  <ul>
                    <h5>Ask us anything! We’re here to answer any questions you have. </h5>
                  </ul>
                </div>

                

                
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                   
                    <div className="col-6 col-lg-3">
                  <h2 className="sub">Subscribe </h2>
                   
                        <div>
                            <form>
                                <input type="email" placeholder="Enter your Email?" className="deta" /><br></br><br></br>
                                <button className="deta-sub">Subscribe Now</button>
                            </form>
                        </div>
                    
                </div>

                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 Akshay. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
