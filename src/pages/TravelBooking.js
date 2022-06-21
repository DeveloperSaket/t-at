import React from "react";
import Navbar from "../navbar";
import TravelBooking from "../TravelBooking";
import Footer from "../Footer";

const Travel = () => {
  return (
    <>

    <div className="main-div2">
    <Navbar />
    
    <div class="container">
    <div className="main3-div">
    <div className="desc">
                   <h1>Our Apartment</h1>
                </div>
                
                
            {/* search start */}
            <div className="container rio"><br></br><br></br>
            <h1 id="oroom">Our Rooms</h1>
            <br></br>
                <form className="frm">
                    <div className="row ">
                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="form-group">
                                <label>Check-In</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="form-group">
                                <label>Check-Out</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="form-group">
                                <label>Adault</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <div className="form-group">
                                <label>Kids</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-2">
                            <br></br>
                            <div className="form-group">

                                <button className="form-control">Search</button>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </form>

            </div>
            {/* search end */}

            <div className="container suit">
                {/* booking flate start */}
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <img src="./images/f1.jpg" className="back-img embed-responsive" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h4>Junior Suite</h4>
                        <span>Our Junior Suites offer breathaking views of the city skyline</span>
                        <ul>
                            <li>Size: 260sq ft</li>
                            <li>Beds:2 Double(s)</li>
                        </ul>
                        <hr></hr>
                        <div className="iconss">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube"></a>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div><h5>From</h5></div>
                        <div className="mt-3"><h2>$250</h2></div>
                        <div><button className="minfo mt-4">More Info</button></div>
                    </div>
                </div>
                {/* booking flate end */}

                                {/* booking flate start */}
                                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <img src="./images/f2.jpg" className="back-img embed-responsive" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h4>Standrad Suite</h4>
                        <span>Our Junior Suites offer breathaking views of the city skyline</span>
                        <ul>
                            <li>Size: 130sq ft</li>
                            <li>Beds:2 Double(s)</li>
                        </ul>
                        <hr></hr>
                        <div className="iconss">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube"></a>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div><h5>From</h5></div>
                        <div className="mt-3"><h2>$250</h2></div>
                        <div><button className="minfo mt-4">More Info</button></div>
                    </div>
                </div>
                {/* booking flate end */}

                                {/* booking flate start */}
                                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <img src="./images/f3.jpg" className="back-img embed-responsive" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h4>Superior Suite</h4>
                        <span>Our Junior Suites offer breathaking views of the city skyline</span>
                        <ul>
                            <li>Size: 280sq ft</li>
                            <li>Beds:2 Kings</li>
                        </ul>
                        <hr></hr>
                        <div className="iconss">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube"></a>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>

                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div><h5>From</h5></div>
                        <div className="mt-3"><h2>$350</h2></div>
                        <div><button className="minfo mt-4">More Info</button></div>
                    </div>
                </div>
                {/* booking flate end */}
            </div>
             <br></br>
        </div>
    </div>
    
      
      <TravelBooking />

      <Footer />
    </div>
     
    </>
  );
};

export default Travel;
