import React from "react";
import styled from "styled-components";
import Testimonials from "../../Testimonials";
import GetTheApp from "../../GetTheApp";
import Footer from "../../Footer";
import NavbarComponent from "../../NavbarComponent";
import cont1 from "../../../Images/cont1.png";
import place1 from "./Images/place1.png";
import place2 from "./Images/place2.png";
import func from "../../../Images/function.png";
import graph from "../../../Images/graph.png";
import finance from "../../../Images/finance.png";
 
import { Link } from 'react-router-dom'



const AboutUs = () => {
  return (
    <div>
      <header>
      <NavbarComponent />
      </header>
      <Wrapper>
        <div>
        
          {/* <NavbarComponent/>*/}
          <div className="jumbotron1">
            

          </div>
          <div className="heading2">
            <a href="/class11C" style = {{padding : "15px" , color : "black" , fontSize : "29px" }}>CBSE</a>
            <a href="/class11CICSE" style = {{padding : "15px" , color : "black" ,fontWeight : "bold" , fontSize : "29px"}}>ICSE</a>
          </div>
          <br/>
          <br/>
          
        <div>
        
          <div
              className="heading"
              data-aos="zoom-in-up"
              data-aos-duration={2500}
            >
              Class  11 Commerce ICSE
             
            </div>
            
          

          </div>
          <div className="container-fluid">
              <div className="row ">
              
              <div
                  className="col-lg-2 offset-lg-3 center col-md-6 col-12 mt-3"
                  data-aos="flip-right"
                  data-aos-duration={1500}
                >
                  <div className="card text-center h-80 border-0 image-background">
                   <a href="/"> <img
                      className="card-img-top img-fluid card01 mx-auto image-1 "
                      src={func}
                      alt=""
                      style = {{ width : "200px" }}
                    />
                    </a>
                    <div className="card-block">
                      <h4 className="card-title ct-1 card-three">
                        Maths
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="col-lg-2 center col-md-6 col-12 mt-3"
                  data-aos="flip-right"
                  data-aos-duration={1500}
                >
                  <div className="card text-center h-80 border-0 image-background">
                   <a href="/"> <img
                      className="card-img-top img-fluid card01 mx-auto image-1 "
                      src={finance}
                      alt=""
                      style = {{ width : "200px" }}
                    />
                    </a>
                    <div className="card-block">
                      <h4 className="card-title ct-1 card-three">
                        Accountancy
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="col-lg-2 center col-md-6 col-12 mt-3"
                  data-aos="flip-right"
                  data-aos-duration={1500}
                >
                  <div className="card text-center h-80 border-0 image-background">
                   <a href="/"> <img
                      className="card-img-top img-fluid card01 mx-auto image-1 "
                      src={graph}
                      alt=""
                      style = {{ width : "200px" }}
                    />
                    </a>
                    <div className="card-block">
                      <h4 className="card-title ct-1 card-three">
                        Economics
                      </h4>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                
                
                
                
                
                </div>
                </div>
        <br/>
        <br/>

        <div>
            <img src={place1} className = "img-right" alt="picture" />
            </div>
            <div >
            <img src={place2} className = "img-left" alt="picture" />
            </div>
            <br /><br /><br />
        <div>
            {/* 2 Banners  part Here */}
        
            <div>
        
        <div
            className="heading"
            data-aos="zoom-in-up"
            data-aos-duration={2500}
          >
            Start Learning Today!
          </div>
          
        

        </div>
        <br/>
        <br/>
        
        <div className="container ">
            <div className="row ">
            <div
                className="col-lg-4 offset-lg-2 center col-md-6 col-12 "
                data-aos="flip-right"
                data-aos-duration={1500}
              >
                <div className="card text-center h-100 border-0 image-background" style = {{ borderRadius :"50%" , borderColor: "orange"}}>
                <div class="card-header" style = {{ background : "orange" , color : "white" , fontSize : "20px", borderRadius :"20px 20px 0 0" , textTransform : "uppercase"}}>
                Complete Module
                </div>
                <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col" style = {{ color : "#FB8F1D", fontSize : "15px" }}><del>₹10000</del></div>
                    <div class="col" style = {{ color : "orange" , fontSize : "15px" , background : "rgba(251, 143, 29, 0.45)" , borderRadius :"8px"}}>50% OFF</div>
                    <div class="w-100"></div>
                    <br/>
                    <div class="col" style = {{ color : "orange" ,  fontSize : "30px" }}>₹5000</div>
                    <div class="col mt-2" style = {{ color : "orange" , fontSize : "15px" }}>Incl. GST</div>
                  </div>
                </div>
                  {/* <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                  
                  <hr  style = {{  borderColor: "orange"}}/>
                  <h3>Features</h3>
                  <h3>Features</h3>
                  <h3>Features</h3>
                  <br/>
                  <br/>
                  <Link to="#" className="btn login-btn mr-2" role="button" style={{  width: 110 , height: 46 , textDecoration: "none" , borderRadius: "10px", background : "#FB8F1D" , color : "white"}}>
                Buy
              </Link>
                </div>
               
                 
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                className="col-lg-4 center col-md-6 col-12 "
                data-aos="flip-right"
                data-aos-duration={1500}
              >
                <div className="card text-center h-100 border-0 image-background" style = {{ borderRadius :"50%" , borderColor: "orange"}}>
                <div class="card-header" style = {{ background : "orange" , color : "white" , fontSize : "20px", borderRadius :"20px 20px 0 0" , textTransform : "uppercase"}}>
                Individual Module
                </div>
                <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col" style = {{ color : "#FB8F1D", fontSize : "15px" }}><del>₹10000</del></div>
                    <div class="col" style = {{ color : "orange" , fontSize : "15px" , background : "rgba(251, 143, 29, 0.45)" , borderRadius :"8px"}}>50% OFF</div>
                    <div class="w-100"></div>
                    <br/>
                    <div class="col" style = {{ color : "orange" ,  fontSize : "30px" }}>₹5000</div>
                    <div class="col mt-2" style = {{ color : "orange" , fontSize : "15px" }}>Incl. GST</div>
                  </div>
                </div>
                  {/* <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                  
                  <hr  style = {{  borderColor: "orange"}}/>
                  <h3>Features</h3>
                  <h3>Features</h3>
                  <h3>Features</h3>
                  <br/>
                  <br/>
                  <Link to="#" className="btn login-btn mr-2" role="button" style={{  width: 110 , height: 46 , textDecoration: "none" , borderRadius: "10px"}}>
                Buy
              </Link>
                </div>
               
                 
                </div>
              </div>
              <br />
              <br />
              
              
              
              </div>
              
              </div>
      <br/>
      <br/>
          
        

        </div>
        <hr/>
        {/* Tips  part Here */}
        <div
            className="heading"
            data-aos="zoom-in-up"
            data-aos-duration={2500}
          >
             Study Tips & Tricks
          </div>
       


          <div class="how-section1">
<div class="row">
<div class="col-md-8">
                            <h4> Don’t have too much on your plate</h4>
                                        <h4 class="subheading">Make realistic targets for a day. Even Rome was not built in a day. Do not overdo things.</h4>
                        <p class="text-muted">Exercise you brain in a constructive way, and do not clutter it with a lot of thoughts. Be clear in your mind and do not pressure yourself to cover things that are beyond your reach.
                        Of the 5 or 6 subjects, pick up 2 or a maximum of 3 subjects and pick up a topic or two from each and go into the depths of the topics, instead of skimming 8-10 topics.
                        </p>
                        </div>
                        <div class="col-md-4 how-img">
                            <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" class="rounded-circle img-fluid" style={{width : "70%"}} alt=""/>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <h4> Follow a proper schedule</h4>
                                        <h4 class="subheading">Sleep early, get up early in the morning, have a proper breakfast and then study</h4>
                                        <p class="text-muted">Do not stay up late or waste time doing something that is counter productive like worrying about what might happen. Take out an hour or two to relax and not think about the exams. Read, sleep, play or do whatever you think diverts your attention away from exams.</p>
                        </div>
                        <div class="col-md-4 how-img">
                            <img src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png" class="rounded-circle img-fluid" style={{width : "70%"}} alt=""/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <h4>Previous Question Papers</h4>
                                        <h4 class="subheading">By solving papers, you also get an idea about how many ways the same question has appeared, and what are the different ways to answer it.</h4>
                                        <p class="text-muted">Try to solve as many previous years question papers, it helps you get to know which question has been asked how many times, along with the marks allotted to that particular question. It also gives an idea about the required minimum length of the answer.</p>
                        </div>
                        <div class="col-md-4 how-img">
                             <img src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png" class="rounded-circle img-fluid" style={{width : "70%"}} alt=""/>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <h4>Mix and match</h4>
                                        <h4 class="subheading">Study that for 2 hours or so and gradually increase the level of preparation</h4>
                                        <p class="text-muted">Plan your day well. Like a good meal, it is important to have all the essential ingredients while studying as well. Do not have all easy subjects/topics in a day or do not over burden yourself with topics that you find difficult. To maximize your output, start your “study day” with a light subject for an hour or so, once you get warmed up, take up a heavy subject or a topic.</p>
                        </div>
                        <div class="col-md-4 how-img">
                            <img src="https://image.ibb.co/gQ9iE9/Work_Section2_freelance_img4.png" class="rounded-circle img-fluid" style={{width : "70%"}} alt=""/>
                        </div>
                    </div>
                </div>
        
        <div></div>
        
        <hr/>

        <div className="mt-5">
          <br></br>
          {/* <h1 class="main" data-aos="zoom-in-down" data-aos-duration="1500">
            <b>Testimonials</b>
          </h1> */}
          <br></br>
          <br></br>
          <Testimonials />
          <GetTheApp />
          <Footer />
        </div>
        </div>
      </Wrapper>
      
    </div>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  body {
    font-family: "Playfair Display", serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.7;
    background-image: url("./images/bg.png");
    overflow-x: hidden;
  }

  .jumbotron {
    background: #fff5e5;
    height: 200px;
    z-index : 1
  }
  .jumbotron1 {
    height: 200px;
  }
  .how-section1{
    margin-top:-15%;
    padding: 10%;
}
.how-section1 h4{
    color: #ffa500;
    font-weight: bold;
    font-size: 30px;
}
.how-section1 .subheading{
    color: #3931af;
    font-size: 20px;
}
.how-section1 .row
{
    margin-top: 10%;
}
.how-img 
{
    text-align: center;
}
.how-img img{
    width: 40%;
}
.img-left{
  float: left;
  margin-top:-550px;
  z-index:-1;
  width:600px;
  height:600px;
}

.img-right{
  float: right;
  margin-top: -700px;
  height: 600px;
  width: 600px;
}


  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    line-height: 80px;
    color: #202336;
  }
  .heading1 {
    text-align: center;
    font-weight: bold;
    font-size: 69px;
    line-height: 80px;
    color: #202336;
  }
  a {
    cursor: pointer;
    transition: all 200ms linear;
  }
  a:hover {
    text-decoration: none;
  }
  .link {
    color: #c4c3ca;
  }
  .link:hover {
    color: #ffeba7;
  }
  .over-hide {
    overflow: hidden;
  }
  .size-22 {
    font-size: 22px;
  }
  .section {
    position: relative;
    width: 100%;
    z-index: 1;
    display: block;
  }
  .full-height {
    min-height: 100vh;
  }
  [type="checkbox"]:checked,
  [type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  .pricing:checked + label,
  .pricing:not(:checked) + label {
    position: relative;
    display: block;
    text-align: center;
    width: 260px;
    height: 44px;
    border-radius: 4px;
    padding: 0;
    margin: 0 auto;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 44px;
    padding: 0 25px;
    padding-right: 27px;
    overflow: hidden;
    color: #fff;
    text-align: left;
  }
  .pricing:checked + label:before,
  .pricing:not(:checked) + label:before {
    position: absolute;
    content: "";
    z-index: -2;
    background-color: #000;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
  }
  .pricing:checked + label:after,
  .pricing:not(:checked) + label:after {
    position: absolute;
    content: "";
    z-index: -1;
    background-color: #fff;
    width: 128px;
    height: 40px;
    display: block;
    top: 2px;
    left: 2px;
    border-radius: 2px;
    transition: left 300ms linear;
  }
  .pricing:checked + label:after {
    left: 130px;
  }
  .block-diff {
    display: block;
    mix-blend-mode: difference;
  }

  .card-3d-wrap {
    position: relative;
    width: 340px;
    max-width: calc(100% - 20px);
    height: 510px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 1000px;
    margin-top: 90px;
  }
  .card-3d-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: transform 700ms 400ms ease-out;
  }
  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.07);
  }
  .card-back {
    transform: rotateY(180deg);
  }
  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper {
    transform: rotateY(180deg);
    transition: transform 700ms 400ms ease-out;
  }
  .pricing-wrap {
    position: relative;
    padding-top: 160px;
    width: 100%;
    display: block;
    z-index: 1;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .pricing-wrap h4 {
    position: relative;
    width: 100%;
    display: block;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 22px;
    line-height: 1.7;
    color: #102770;
    transform: translate3d(0, 0, 35px) perspective(100px);
  }
  .pricing-wrap h4:before {
    position: absolute;
    content: "";
    z-index: -1;
    background: linear-gradient(217deg, #448ad5, #b8eaf9);
    width: 70px;
    height: 70px;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 6px 20px 0 rgba(16, 39, 112, 0.3);
    animation: border-transform 6s linear infinite;
  }
  .card-back .pricing-wrap h4:before {
    background: linear-gradient(217deg, #ff7f50, #ffa500);
  }
  @keyframes border-transform {
    0%,
    100% {
      border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
      border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
      border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
      border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
      border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
      border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
      border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
  }
  .pricing-wrap h2 {
    position: relative;
    width: 100%;
    display: block;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 36px;
    line-height: 1.1;
    color: #102770;
    transform: translate3d(0, 0, 30px) perspective(100px);
  }
  .pricing-wrap h2 sup {
    font-size: 20px;
  }
  .pricing-wrap p {
    position: relative;
    width: 100%;
    display: block;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 1px;
    color: #102770;
    transform: translate3d(0, 0, 30px) perspective(100px);
  }
  .card-back h2,
  .card-back p,
  .card-back h4 {
    color: #0c1c00;
  }
  .link {
    position: relative;
    padding: 10px 20px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #000;
    transition: all 200ms linear;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    transform: translate3d(0, 0, 30px) perspective(100px);
  }
  .link:hover {
    color: #102770;
    background-color: #2cbde6;
  }
  .card-back .link {
    background-color: #0c1c00;
  }
  .card-back .link:hover {
    color: #0c1c00;
    background-color: #ff9d00;
  }

  .img-1 {
    position: absolute;
    display: block;
    left: -160px;
    top: -80px;
    z-index: 5;
    width: calc(80% + 160px);
    transform: translate3d(0, 0, 45px) perspective(100px);
    opacity: 1;
    pointer-events: auto;
    transition: transform 400ms 1200ms ease, opacity 400ms 1200ms ease;
  }

  .img-1 img {
    width: 50%;
    height: auto;
  }

  .img-6 img {
    width: 80%;
    height: auto;
  }
  .img-4 img {
    width: 70%;
    height: auto;
    margin-left: -100px;
  }

  .img-7 img {
    width: 70%;
    height: auto;
    margin: -50px 0 0 20px;
  }

  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-1 {
    opacity: 0;
    transform: translate3d(-50px, 25px, 45px) perspective(100px);
    pointer-events: none;
    transition: transform 400ms ease, opacity 200ms 150ms ease;
  }
  .img-2 {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    z-index: 1;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
    width: 100%;
    transform: translate3d(0, 0, 15px) perspective(100px);
  }
  .img-3 {
    position: absolute;
    display: block;
    right: -20px;
    top: -40px;
    z-index: 5;
    width: calc(60% + 20px);
    transform: translate3d(0, 0, 55px) perspective(100px) scale(1);
    opacity: 1;
    pointer-events: auto;
    transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
  }
  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-3 {
    opacity: 0;
    transform: translate3d(-50px, 5px, 55px) perspective(100px) scale(0.4);
    pointer-events: none;
    transition: transform 400ms ease, opacity 200ms 150ms ease;
  }
  .img-6 {
    position: absolute;
    display: block;
    right: -20px;
    bottom: -55px;
    z-index: 5;
    width: calc(20% + 30px);
    transform: translate3d(0, 0, 25px) perspective(100px) scale(1);
    opacity: 1;
    pointer-events: auto;
    transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
  }
  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-6 {
    opacity: 0;
    transform: translate3d(0, 0, 25px) perspective(100px) scale(0.4);
    pointer-events: none;
    transition: transform 400ms ease, opacity 200ms 150ms ease;
  }

  .img-4 {
    position: absolute;
    display: block;
    left: -60px;
    top: -60px;
    z-index: 5;
    width: calc(65% + 60px);
    transform: translate3d(0, 0, 45px) perspective(100px) scale(0.5);
    opacity: 0;
    pointer-events: none;
    transition: transform 400ms ease, opacity 200ms 150ms ease;
  }
  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-4 {
    opacity: 1;
    pointer-events: auto;
    transform: translate3d(0, 0, 45px) perspective(100px) scale(1);
    transition: transform 400ms 1200ms ease, opacity 300ms 1200ms ease;
  }
  .img-5 {
    position: absolute;
    display: block;
    right: -70px;
    top: -50px;
    z-index: 6;
    width: calc(60% + 70px);
    transform: translate3d(0, 0, 35px) perspective(100px) scale(0.5)
      rotate(0deg);
    opacity: 0;
    pointer-events: none;
    transition: transform 400ms 100ms ease, opacity 200ms 250ms ease;
  }
  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-5 {
    opacity: 1;
    pointer-events: auto;
    transform: translate3d(0, 0, 35px) perspective(100px) scale(1) rotate(10deg);
    transition: transform 400ms 1300ms ease, opacity 300ms 1300ms ease;
  }
  .img-7 {
    position: absolute;
    display: block;
    right: -30px;
    bottom: -65px;
    z-index: 6;
    width: calc(25% + 30px);
    transform: translate3d(0, 0, 35px) perspective(100px) scale(0.5);
    opacity: 0;
    pointer-events: none;
    transition: transform 400ms 100ms ease, opacity 200ms 250ms ease;
  }
  .pricing:checked ~ .card-3d-wrap .card-3d-wrapper .img-7 {
    opacity: 1;
    pointer-events: auto;
    transform: translate3d(0, 0, 35px) perspective(100px) scale(1);
    transition: transform 400ms 1300ms ease, opacity 300ms 1300ms ease;
  }

  .logo {
    position: fixed;
    top: 30px;
    right: 30px;
    display: block;
    z-index: 100;
    transition: all 250ms linear;
  }
  .logo img {
    height: 26px;
    width: auto;
    display: block;
  }

  /*testimonials*/
  .main {
    text-align: center;
    color: #fa9917;

    font-size: 60px;
    letter-spacing: 2.86px;
    line-height: 70px;
    margin-top: 7%;
  }

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: default;
  }

  .testim {
    width: 100%;
    margin-top: 170px;
    margin-bottom: -200px;
    top: 50%;
    -webkit-transform: translatey(-50%);
    -moz-transform: translatey(-50%);
    -ms-transform: translatey(-50%);
    -o-transform: translatey(-50%);
    transform: translatey(-50%);
  }

  .testim .wrap {
    width: 100%;
    max-width: 1020px;
    padding: 40px 20px;
    margin: auto;
  }

  .testim .arrow {
    display: block;
    position: absolute;
    color: #333;
    cursor: pointer;
    font-size: 2em;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding: 5px;
    z-index: 22222222;
  }

  .testim .arrow:before {
    cursor: pointer;
  }

  .testim .arrow:hover {
    color: green;
  }

  .testim .arrow.left {
    left: 70px;
  }

  .testim .arrow.right {
    right: 70px;
  }

  .testim .dots {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    display: block;
    z-index: 3333;
    height: 12px;
  }

  .testim .dots .dot {
    list-style-type: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid green;
    margin: 0 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: relative;
  }

  .testim .dots .dot.active,
  .testim .dots .dot:hover {
    background: green;
    border-color: green;
  }

  .testim .dots .dot.active {
    -webkit-animation: testim-scale 0.5s ease-in-out forwards;
    -moz-animation: testim-scale 0.5s ease-in-out forwards;
    -ms-animation: testim-scale 0.5s ease-in-out forwards;
    -o-animation: testim-scale 0.5s ease-in-out forwards;
    animation: testim-scale 0.5s ease-in-out forwards;
  }

  .testim .cont {
    position: relative;
    overflow: hidden;
  }

  .testim .cont > div {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0 70px 0;
    opacity: 0;
  }

  .testim .cont > div.inactive {
    opacity: 1;
  }

  .testim .cont > div.active {
    position: relative;
    opacity: 1;
  }

  .testim .cont div .img img {
    display: block;
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50%;
  }

  .testim .cont div h2 {
    color: green;
    font-size: 1em;
    margin: 15px 0;
  }

  .testim .cont div p {
    font-size: 1.15em;
    color: #333;
    width: 70%;
    margin: auto;
  }

  .testim .cont div.active .img img {
    -webkit-animation: testim-show 0.5s ease-in-out forwards;
    -moz-animation: testim-show 0.5s ease-in-out forwards;
    -ms-animation: testim-show 0.5s ease-in-out forwards;
    -o-animation: testim-show 0.5s ease-in-out forwards;
    animation: testim-show 0.5s ease-in-out forwards;
  }

  .testim .cont div.active h2 {
    -webkit-animation: testim-content-in 0.4s ease-in-out forwards;
    -moz-animation: testim-content-in 0.4s ease-in-out forwards;
    -ms-animation: testim-content-in 0.4s ease-in-out forwards;
    -o-animation: testim-content-in 0.4s ease-in-out forwards;
    animation: testim-content-in 0.4s ease-in-out forwards;
  }

  .testim .cont div.active p {
    -webkit-animation: testim-content-in 0.5s ease-in-out forwards;
    -moz-animation: testim-content-in 0.5s ease-in-out forwards;
    -ms-animation: testim-content-in 0.5s ease-in-out forwards;
    -o-animation: testim-content-in 0.5s ease-in-out forwards;
    animation: testim-content-in 0.5s ease-in-out forwards;
  }

  .testim .cont div.inactive .img img {
    -webkit-animation: testim-hide 0.5s ease-in-out forwards;
    -moz-animation: testim-hide 0.5s ease-in-out forwards;
    -ms-animation: testim-hide 0.5s ease-in-out forwards;
    -o-animation: testim-hide 0.5s ease-in-out forwards;
    animation: testim-hide 0.5s ease-in-out forwards;
  }

  .testim .cont div.inactive h2 {
    -webkit-animation: testim-content-out 0.4s ease-in-out forwards;
    -moz-animation: testim-content-out 0.4s ease-in-out forwards;
    -ms-animation: testim-content-out 0.4s ease-in-out forwards;
    -o-animation: testim-content-out 0.4s ease-in-out forwards;
    animation: testim-content-out 0.4s ease-in-out forwards;
  }

  .testim .cont div.inactive p {
    -webkit-animation: testim-content-out 0.5s ease-in-out forwards;
    -moz-animation: testim-content-out 0.5s ease-in-out forwards;
    -ms-animation: testim-content-out 0.5s ease-in-out forwards;
    -o-animation: testim-content-out 0.5s ease-in-out forwards;
    animation: testim-content-out 0.5s ease-in-out forwards;
  }

  @-webkit-keyframes testim-scale {
    0% {
      -webkit-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -webkit-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -webkit-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -webkit-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-moz-keyframes testim-scale {
    0% {
      -moz-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -moz-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -moz-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -moz-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-ms-keyframes testim-scale {
    0% {
      -ms-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -ms-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -ms-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -ms-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-o-keyframes testim-scale {
    0% {
      -o-box-shadow: 0px 0px 0px 0px #eee;
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      -o-box-shadow: 0px 0px 10px 5px #eee;
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      -o-box-shadow: 0px 0px 10px 5px #ea830e;
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      -o-box-shadow: 0px 0px 0px 0px #ea830e;
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @keyframes testim-scale {
    0% {
      box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
      box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
      box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
      box-shadow: 0px 0px 0px 0px #ea830e;
    }
  }

  @-webkit-keyframes testim-content-in {
    from {
      opacity: 0;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-moz-keyframes testim-content-in {
    from {
      opacity: 0;
      -moz-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -moz-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-ms-keyframes testim-content-in {
    from {
      opacity: 0;
      -ms-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-o-keyframes testim-content-in {
    from {
      opacity: 0;
      -o-transform: translateY(100%);
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes testim-content-in {
    from {
      opacity: 0;
      transform: translateY(100%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @-webkit-keyframes testim-content-out {
    from {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @-moz-keyframes testim-content-out {
    from {
      opacity: 1;
      -moz-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      -moz-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @-ms-keyframes testim-content-out {
    from {
      opacity: 1;
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      -ms-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @-o-keyframes testim-content-out {
    from {
      opacity: 1;
      -o-transform: translateY(0);
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes testim-content-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  @-webkit-keyframes testim-show {
    from {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-moz-keyframes testim-show {
    from {
      opacity: 0;
      -moz-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }
  }

  @-ms-keyframes testim-show {
    from {
      opacity: 0;
      -ms-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }

  @-o-keyframes testim-show {
    from {
      opacity: 0;
      -o-transform: scale(0);
      transform: scale(0);
    }

    to {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes testim-show {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @-webkit-keyframes testim-hide {
    from {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }

  @-moz-keyframes testim-hide {
    from {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -moz-transform: scale(0);
      transform: scale(0);
    }
  }

  @-ms-keyframes testim-hide {
    from {
      opacity: 1;
      -ms-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -ms-transform: scale(0);
      transform: scale(0);
    }
  }

  @-o-keyframes testim-hide {
    from {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }

    to {
      opacity: 0;
      -o-transform: scale(0);
      transform: scale(0);
    }
  }

  @keyframes testim-hide {
    from {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  @media all and (max-width: 300px) {
    body {
      font-size: 14px;
    }
  }

  @media all and (max-width: 500px) {
    .testim .arrow {
      font-size: 1.5em;
    }

    .testim .cont div p {
      line-height: 25px;
    }
  }

  /* Get App */
  .get-app {
    margin-top: 340px;
    width: 100%;
    
    background: #fff5e5;
  }
  .app {
    margin-top: 20px;
    font-size: 36px;
    font-weight: bold;
    color: black;
  }

  .img-mobile {
    width: auto;
    height: 500px;
    margin-top: -170px;
    margin-left: 15%;
    border-radius: 8px;
  }
  .app-txt {
    float: right;
    margin-right: 25%;
    font-style: normal;
    color: #7d7987;
    font-size: 20px;
    padding: 40px;
  }

  .download {
    background: #fb8f1d;
    
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    
    align-items: center;
    
    color: #ffffff;
  }
  .download:hover {
    box-shadow: 2px 2px 5px black;
  }
  .books {
    float: right;
  }
  .buttonIn {
    display: flex;
  }
  #phone {
    width: 300px;
  }
  .joins {
    background: #fa9917;
    border-radius: 0 5px 5px 0;
    width: 70px;
    height: 40px;
    color: white;
    margin-top: -0.5px;
  }

  .counselling {
    margin-top: 350px;
    width: 100%;
    height: 350px;
    background: transparent;
  }
  .counselling-img {
    float: right;
    margin-top: -120px;
    margin-right: 15%;
  }
  .counselling-left {
    float: left;
    margin-left: 15%;
    color: #7d7987;
  }

  @media (max-width: 400px) {
    .missioned-nav {
      font-size: 30px;
    }
  }
  @media (max-width: 754px) {
    .counters {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 400px) {
    .ed {
      font-size: 30px;
    }
  }
  @media (max-width: 1320px) {
    .teach {
      margin-top: 40px;
    }
  }
  @media (max-width: 900px) {
    .tagline {
      font-size: 50px;
    }
  }
  @media (max-width: 900px) {
    .tg2 {
      font-size: 20px;
    }
  }

  .image_section img {
    display: block;
    margin: 70px 100px;
  }

  @media (max-width: 1408px) {
    .feature .main {
      margin-top: 1250px;
    }
  }

  @media (max-width: 1320px) {
    .image_section img:first-child {
      display: none;
    }
  }
  @media (max-width: 1320px) {
    .tg4 {
      display: none;
    }
  }
  @media screen and (max-width: 601px) {
    .centered-num {
      margin-right: 50%;
    }
  }
  @media (max-width: 450px) {
    .play img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      height: auto;
    }
  }

  @media screen and (max-width: 601px) {
    .tg4 {
      font-size: 5vw;
    }
  }
  @media (max-width: 1414px) {
    .img-section-left {
      display: none;
    }
  }
  @media (max-width: 1414px) {
    .learning-page {
      display: block;
      /*float: none;*/
      margin: -50px 20% 5%;
      width: 50%;
    }
  }

  @media (max-width: 1414px) {
    .learning-page-2 {
      display: block;
      /*float: none;*/
      margin: 3% 30% 5%;
      width: 50%;
    }
  }
  @media (max-width: 1386px) {
    .feature {
      margin-top: 170px;
    }
  }
  @media (max-width: 1414px) {
    .img-section-right {
      display: none;
    }
  }
  @media (max-width: 1382px) {
    .img-mobile {
      display: none;
    }
  }
  @media (max-width: 1382px) {
    .books {
      display: none;
    }
  }
  @media screen and (max-width: 601px) {
    .app-txt {
      font-size: 70%;
      margin-top: 30px;
    }
  }

  @media (max-width: 1396px) {
    .counselling-img {
      display: none;
    }
  }
  @media screen and (max-width: 601px) {
    .counselling-left {
      font-size: 70%;
    }
  }

  @media (max-width: 1396px) {
    .counselling {
      margin-top: 50px;
    }
  }
  @media (max-width: 1396px) {
    .get-app {
      margin-top: 50px;
    }
  }

  @media (max-width: 1396px) {
    .learning-heading-2 {
      margin-top: 80px;
    }
  }

  @media (max-width: 1396px) {
    #phone {
      width: 200px;
    }
  }
  .heading2 {
    text-align: center;
  }
`;
