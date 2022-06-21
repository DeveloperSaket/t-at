import React from "react";
import Navbar from "../navbar";

import Footer from "../Footer";

const Contact = () => {
  return (
    <>
   <div className="c-div">
      <Navbar />

      <div className=" contaner">
            
            <br></br><br></br>
            <div className="container">

                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div><h4>Ask Us Anything</h4></div>
                        <div><hr></hr></div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <div>
                            <form>
                                <input type="text" placeholder="Your Name" className="fr1"/><br></br><br></br>
                                <input type="text" placeholder="Your Email" className="fr1"/><br></br><br></br>
                                <textarea placeholder="Type your message here" className="fr2"></textarea><br></br>
                                <button className="bb">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div><h4>How to get Here</h4></div>
                        <div><hr></hr></div>
                        <div><span>R. Frame de Mora <br></br>
                                   Floor 6 Rio janeiro <br></br>
                                   cell:123-456-789
                        </span></div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                        <div>
                            <img src="./images/map.jpg" className="mapp"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      <Footer />
      </div>
    </>
  );
};

export default Contact;
