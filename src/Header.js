import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section >
        
        <div className="container-fluid main-hero-container " >
        <img
                src="./images/pic1.jpg"
                alt="main"
                className="img-fluid main-hero-img2"
                
                />
                
                <h4 className="pictxt">Welcome to Meghalaya</h4>
        </div>
        <div className="container " id="formp">
          
        <div class="col-3 ">
					<label id="lbl">Check In</label>
          <br></br>
					<input type={"date"} name=" " className="inpt">
          </input>
        </div>

        <div class="col-3">
					<label id="lbl">Check Out</label>
          <br></br>
					<input type={"date"} name=" " className="inpt">
          </input>
        </div>

        <div class="col-1.5">
					<label id="lbl">Adult</label>
          <br></br>
					<input type="number" name=" " className="num">
          </input>
        </div>
        
        <div class="col-1.5">
					<label id="lbl">Kids</label>
          <br></br>
					<input type="number" name=" " className="num">
          </input>
        </div>
       
        <div class="col-4">
				
				<button class="btn1" type="submit">
                  Search
                </button>
               
        </div>
        
        </div>
        

        <br></br>
      <div className=" container two">
      <div className="  row">
        <div className="col-4">
        <h1 className="txt"> Our <br></br>
                   Travel Packages</h1>
        </div>
        <div class="col-8 "  >
        <img className="img"
            src="./images/pic2.jpg"
            alt="imag"
            />
        </div>
      </div>
      </div>
     
            <div className=" container three">
            <div className="row">
            <div class="col-4 "  >
              <img className="img"
                  src="./images/pic3.jpg"
                  alt="imag"
                  />
              </div>
              <div className="col-8">
              <h1 className="txt3">The apartment is spacious with high ceilings, large windows, an open<br></br> balcony and a beautiful view of the beach. Stay cool with central A/C<br></br> and wind-down comfortably in the queen sized bedroom</h1>
              <br></br>
              <br></br> 
             <button class="" name=""  id="btn3" >BOOK NOW</button>
              </div>
              </div>
              </div>
              
        
        </section><br></br> <br></br> <br></br>
        <section>
          <div className=" container four">
        <div className="row">
            <div class="col-8 "  >
              <img className="img"
                  src="./images/pic4.jpg"
                  alt="imag"
                  />
              </div>
              <div className="col-4">
              <h1 className="txt">Location</h1> 
              </div>
              </div>
              </div>

        <div className=" container five">
          
        <h5 id="t5">Conveniently located just opposite Leblon Beach in Ipanema, our apartment will sweep you into the charm and excitements of Rio! Dine at one of our neighborhood’
          s many world-renowned restaurants, enjoy fresh-squeezed juices from one of the colourful stalls along the beach, and don’
          t miss live bossy-nova show in one of the local bars.</h5>
        </div>
        <div className=" container six">
        <div className="row">
          <div class="col-4 "  >
        <img className="img"
            src="./images/pic5.jpg"
            alt="imag"
            />
      
        </div>
        <div className="col-8 ">
        <h1 id="six">About Camila & Tiago </h1><br></br><br></br>

       <p id="last-para"> Hi, my name is Camila and I’m a nutritionist from the south of Brazil.<br></br>
        I moved to the beautiful Ipanema neighborhood two years ago with <br></br>
        my husband, Tiago. We live in a homie highrise just off the<br></br>
         Leblon Beach, but in the summer we travel!</p>
         <br></br>
         <button class="" name=""  id="btn4" >  STAY WITH US</button>

        </div>
      </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </section>
      </header>
    </>
  );
};

export default Header;
