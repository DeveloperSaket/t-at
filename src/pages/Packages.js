import React from "react";
import Navbar from "../navbar";
import Packages from "../Packages";
import Footer from "../Footer";

const Package = () => {
  return (
    <>
      <Navbar />

      
      <div className="main-div">

<div className="mid-div">
   <img src="./images/k2.jpg" className="back-img embed-responsive" />
</div>
<div className="desc">
   <h2 className="rio">Rio De Janeiro</h2>
</div>
<br /><br />
<div className="container">
   <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
         <div>
            <h3>Travel Booking</h3>
         </div>
         <div>
            <hr/>
         </div>
         
         <div className="veh">
            <h3>Vehicle Registration</h3>
         </div>
         <div>
            <hr/>
         </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
         <div className="container form0">
            <h2 >Come Work with Us</h2>
            <div className="row">

               <div className="col-lg-6 col-md-6 col-sm-12 sec-had">
                  <label for="first_name" className="mb-2 mr-sm-2">First Name:</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="first_name"  name="email" />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
                  <label for="last_name" className="mb-2 mr-sm-2">Last Name:</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="last_name"  name="email" />
               </div>

            </div>

            <div className="row">

               <div className="col-lg-6 col-md-6 col-sm-12">
                  <label for="email" className="mb-2 mr-sm-2">Email:</label>
                  <input type="email" className="form-control mb-2 mr-sm-2" id="email"  name="email" />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
                  <label for="phone" className="mb-2 mr-sm-2">Phone:</label>
                  <input type="number" className="form-control mb-2 mr-sm-2" id="phone"  name="email" />
               </div>

            </div>

            <div className="row">

               <div className="col-lg-6 col-md-6 col-sm-12">
                  <label for="Position" className="mb-2 mr-sm-2">Position:</label>
                  <input type="text" className="form-control mb-2 mr-sm-2" id="position"  name="email" />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
                  <label for="Start Date" className="mb-2 mr-sm-2">Start Date:</label>
                  <input type="date" className="form-control mb-2 mr-sm-2" id="start_date"  name="email" />
               </div>

            </div>

            <div className="row">

               <div className="col-lg-6 col-md-6 col-sm-12">
                  <label for="link_cv" className="">Link Cv:</label>
                  <input type="text" className="form-control" id="link_cv"  name="email" />
               </div><br></br><br></br>
               <div className="col-6 " id="btt">
                  <br></br>
                  <button className="bt">Apply</button>
               </div>

            </div>

         </div>


      </div>
   </div>
</div>

</div>

      <Packages />
      <Footer />
    </>
  );
};

export default Package;
