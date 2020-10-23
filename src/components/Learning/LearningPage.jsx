import React from "react";
import Left from "../../Images/left.png";
import Right from "../../Images/Right.png";
import lcerti from "../../Images/lcerti.png";
import AOS from "aos";
import Group67 from "../contactUs/Images/Group 1.png";

import LearningModal from "./LearningModal";

AOS.init();

const LearningPage = () => {
  return (
    <div>
      <div>
        <br/>
        <br/>
        
        <div className="jumbotron"  style = {{ backgroundImage : "linear,left top,left bottom,from(#fff),to(#d6effa)" }}>
          <div className="row">
            <div className="col col-md-6 offset-md-1 rankpredict" data-aos="zoom-in-up" data-aos-duration="1500">
            {/* <svg viewBox="0 0 1500 100">
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="70%" dy=".35em" font-size="1em">JEE RANK PREDICTOR</text>
              </symbol>
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
            </svg> */}
          <br/>
          <br/>
          <br/>
          <h1 className="mb-2" style={{ color : "#000000" , fontSize : "50px" ,}}>JEE RANK PREDICTOR</h1>
          <h4 style={{ color : "white" }}>If you are confused with what rank you will get with your predicted marks , here is a soltuion given by MissionED. One can use this predictor to find his/her rank based on the data from previous year exams.</h4>
          <br/>
          <a href="/rankpredictor" className="btn btn-outlined btn-theme btn-lg" data-wow-delay="0.7s" style={{ background: "rgb(47, 128, 237)"}}>CHECK IT OUT</a>
        </div>
        <div className="col col-md-4">
        <div data-aos="fade-down" data-aos-duration={1000}>
            <img src={Group67} className="right-img" alt="" style = {{ width : "400px" }} />
        </div>
        </div>
        </div>
        </div>
        <div
          className="text-center  teach"
          >
            <div className="container">
            <div className="row">
              <div className="col-md-6 mb-2 pb-3">
              <img
          className="img-fluid "
        
          src={lcerti}
          alt=""
         
                          />
              </div>
         <div className="col-md-6 mt-2" style={{display : "flex", flexDirection : "column", justifyContent : "center"}}> 
         <p data-aos="zoom-in-down" data-aos-duration="1000">
             
             FREE <span>Coding</span> Certification | (Age 6-18){" "}
             <i style={{ color: "pink", marginLeft: "20px" ,paddingRight: "25px" , marginTop: "10px"}} className="fas fa-arrow-right"></i>
           </p>
           <div>
           <LearningModal />
           </div>
           </div>
          

          </div>
            </div>


          
        </div>
          
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className="row ">
        <div className="col-md-5">
        <img
          className="img-fluid"
          data-aos="fade-right"
          data-aos-duration="1500"
          src={Left}
          alt=""
         
        />
              </div>
                    
              <div className="col-md-6 mx-2">
        <div  data-aos="fade-left" data-aos-duration="1500">
          <p className="learning-heading">A new way to explore the learning</p>
          <h6 className="learning-txt">
            {" "}
            The environment of learning we provide is nurtured by the experts. The guidance that
            <br /> you are seeking is from the IITians. They will provide you the enhanced way of
            teaching <br /> with the pinch of fun and enthusiasm. You will get the quality as well
            as playful atmosphere.
          </h6>
          <br />
          <br />
                  </div>
          <div className="col-md-6" data-aos="zoom-in-up" data-aos-duration="1500">
            {" "}
            <center><a href="/feature1">
              <button className="border-0 learn-more-btn" style={{outline: "none"}}>Learn More</button>{" "}
            </a></center>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Learning Page 2  */}
                        
               <div className="col-md-6" style={{padding:"40px"}} >
        <div data-aos="fade-left" data-aos-duration="1500">
          <p className="learning-heading-2">Let’s fall in love with learning</p>
          <h6 className="learning-txt-2">
            Studying is hard? But it doesn’t have to be that way. At MissionEd we
            <br /> believe in making learning fun.With our specially crafted notes and <br />{" "}
            assignments every child i bound to fall in love with learning.
          </h6>
          <br />
          <br />
                   </div>
          <div className="col-md-6" data-aos="zoom-in-up" data-aos-duration="1500">
            {" "}
            <center><a type="button" href="/feature2">
              <button style={{outline: "none"}} className="border-0 learn-more-btn">Learn More</button>{" "}
                </a></center>
          </div>
        </div>
              <div className="col-md-6 " >
        <img
          className="img-fluid"
          data-aos="fade-left"
          data-aos-duration="2500"
          src={Right}
          alt=""
         
        />
              </div>
        
      </div>
    </div>
              </div>
  );
};

export default LearningPage;
