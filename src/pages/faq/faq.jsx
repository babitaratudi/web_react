import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import NavbarComponent from '../../components/NavbarComponent';
import GetTheApp from "../../components/GetTheApp";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const FAQ = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const [openSix, setOpenSix] = useState(false);
  const [openSeven, setOpenSeven] = useState(false);
  const [openEight, setOpenEight] = useState(false);
  return (
    <div>
      <header>
      <NavbarComponent />
      </header>
      <Wrapper>
        <div>
          <div className="jumbotron text-uppercase">
            <div
              className="heading faq-head"
              data-aos="zoom-in-up"
              data-aos-duration={2500}
              style = {{ fontSize : "33px" }}
            >
              Frequently Asked Questions(FAQ)
            </div>
          </div>
          <section
            className="faq"
            style={{ marginTop: '-32px' }}
            data-aos="zoom-out"
            data-aos-duration={2500}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-8 text-center">
                  <div className="section-title">
                    <p>Questions and Answers that may help you!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="accordion" id="accordionExample">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenOne(!openOne)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openOne}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                What is a typical schedule for an online class?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openOne}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                              We conduct classes 5 times a week.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenTwo(!openTwo)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openTwo}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                How is the material available online?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openTwo}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                                Students can log in and can select their courses. 
                                Once a student is in their course site, they can access study materials.                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenThree(!openThree)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openThree}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                 Do you provide any assistance to help students complete their homework?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openThree}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                                Yes
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenFour(!openFour)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openFour}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                 How do I select my teacher?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openFour}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                                You can select from list of teachers available for each subject, 
                                you can select a teacher 
                                suitable as per your requirements.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenFive(!openFive)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openFive}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                Is there a webinar that can explain the program to me?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openFive}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2"style={{fontSize: "19px"}}>
                                Yes, We provide a webinar.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenSix(!openSix)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openSix}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                               How do I get homework assignments, tests, etc.?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openSix}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                                Homework, tests, paper assignments, 
                                and more will be clearly communicated 
                                on the class website as well as directly 
                                by the teacher.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenSeven(!openSeven)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openSeven}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                How can my child clear his/her doubts instantly during the online class?

                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openSeven}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                                While attending a class, 
                                you can ask via a live chatbox. 
                                Our specially assigned teachers will instantly assist and solve your 
                                child's doubts.

                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div
                          className="card"
                          data-aos="zoom-in"
                          data-aos-duration={1000}
                        >
                          <div className="card-header">
                            <h5 className="mb-0">
                              <Button
                                onClick={() => setOpenEight(!openEight)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openEight}
                                className="btn btn-link collapsed" style={{fontSize: "20px"}}
                              >
                                How are parents made aware of their children’s progress?
                              </Button>
                            </h5>
                          </div>
                          <Collapse in={openEight}>
                            <div className="example-collapse-text">
                              <div className="card-body px-3 py-2" style={{fontSize: "19px"}}>
                                
                                We schedule regular parent-teacher conferences during 
                                which we review and discuss children’s progress.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
                
        <GetTheApp />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default FAQ;

const Wrapper = styled.div`
  body {
    background-image: url('Images/bg.png');
    font-family: 'Playfair Display', serif;
  }
  html,
  body {
    overflow-x: hidden;
  }
  .jumbotron {
    background: #fff5e5;
    height: 200px;
    padding-top: 100px;
  }
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
    color: #202336;
  }

  section {
    padding: 60px;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  
  .faq {
    padding: 120px 0 90px;

    min-height: 100vh;
  }
  

  .faq .section-title {
    margin-bottom: 54px;
    text-align: center;
    font-size: 40px;
    line-height: 140%;

    color: #fb8f1d;
  }

  .faq .section-title h2 {
    margin-bottom: 22px;
  }

  .faq .accordion .card {
    border: none;
    margin-bottom: 30px;
  }

  .faq .accordion .card:not(:first-of-type) .card-header:first-child {
    border-radius: 10px;
  }

  .faq .accordion .card .card-header {
    border: none;
    border-radius: 10px;
    padding: 0;
  }

  .faq .accordion .card .card-header h5 {
    padding: 0;
  }

  .faq .accordion .card .card-header h5 button {
    color: #1e3056;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    padding: 0 30px 0 70px;
    height: 80px;
    display: block;
    width: 100%;
    color: rgba(30, 48, 86, 0.8);
    text-align: left;
    background: #fff;
    -webkit-box-shadow: 0px -50px 140px 0px rgba(69, 81, 100, 0.1);
    box-shadow: 0px -50px 140px 0px rgba(69, 81, 100, 0.1);
    border-radius: 10px 10px 0 0;
    position: relative;
  }

  .faq .accordion .card .card-header h5 button:after {
    position: absolute;
    left: 30px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    color: #ff5f74;
    text-align: center;
    border: 1px solid #ff5f74;
    border-radius: 50%;
    line-height: 100%;
    content: '\f067';
    font-size: 10px;
    line-height: 18px;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }

  .faq .accordion .card .card-header h5 button.collapsed {
    background: #fff;
    border: 2px transparent solid !important;
    border-radius: 10px;
    -webkit-box-shadow: none;
    box-shadow: none;
    box-shadow: 0px 20px 40px rgba(252, 104, 45, 0.1);
  }

  .faq .accordion .card .card-header h5 button[aria-expanded='true']:after {
    content: '\f068';
    color: #fff;
    background-image: -webkit-linear-gradient(
      -180deg,
      #5e7eff 0%,
      #ff5f74 30%,
      #a85fff 100%
    );
  }

  .faq .accordion .card .card-body {
    -webkit-box-shadow: 0px 15px 140px 0px rgba(69, 81, 100, 0.1);
    box-shadow: 0px 15px 140px 0px rgba(69, 81, 100, 0.1);
    border-radius: 0 0 10px 10px;
    padding-top: 0;
    margin-top: -6px;
    padding-left: 72px;
    padding-right: 70px;
    padding-bottom: 23px;
    color: rgba(30, 48, 86, 0.8);
    line-height: 30px;
  }

  textarea {
    resize: none;
  }

  /* Testimonials*/
  .read-all {
    background: #fb8f1d;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding: 10px;
    align-items: center;
    padding: 20px;
    color: #ffffff;
  }
  .read-all:hover {
    box-shadow: 2px 2px 5px black;
  }

  /* Get App */
  .get-app {
    margin-top: 100px;
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
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    padding-left: -200px;
    align-items: center;
    padding: 10px;
    color: #ffffff;
  }
  .download:hover {
    box-shadow: 2px 2px 5px black;
    color: white;
  }

  
  .books {
    float: right;
  }
  /*Counselling*/
  .counselling {
    margin-top: 200px;
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
    margin-top: -8px;
  }
  .textfield {
    width: 50%;
  }

  /*MEDIA QUERIES*/
  @media (max-width: 992px) {
    .display {
      display: none;
    }
  }
  @media (max-width: 1382px) {
    .form-display {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 1382px) {
    .right-img {
      display: none;
    }
  }
  @media (max-width: 1430px) {
    .img-mobile {
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
`;
