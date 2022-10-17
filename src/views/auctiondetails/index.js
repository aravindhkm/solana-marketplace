import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';
import "./css/auctiondetails.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import prjDetImg1 from '../../assets/images/prj-det-img1.png';
import collIcon1 from '../../assets/images/coll-icon1.png';
import collIcon2 from '../../assets/images/coll-icon2.png';
import prjDetIcon1 from '../../assets/images/prj-det-icon1.png';
import prjDetIcon2 from '../../assets/images/prj-det-icon2.png';
import collTblIcon2 from '../../assets/images/coll-tbl-icon2.png';
import collTblIcon3 from '../../assets/images/coll-tbl-icon3.png';
import prjDetImg2 from '../../assets/images/prj-det-img2.png';
import ethIcon from '../../assets/images/eth-icon.png';
import clock from '../../assets/images/clock.png';
import championCup from '../../assets/images/championCup.png';
import congProf from '../../assets/images/congProf.png';


const AuctionDetails = (props) => {	
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container>
	        	<div className="row">
              <div className="col-12">
                <div className="pjctGb tcejp-rXob2 mb-3 d-flex justify-content-end">
                  <div className="d-flex">
                    <a className="Grd-Btn mr-3 mb-3 mb-lg-0">Edit</a>
                    <a className="Grd-Btn active">Sell</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="pjctGb mb-4">
                  <div className="pjdtGmi">
                    <img src={prjDetImg1} className="d-block mx-auto img-fluid" />
                  </div>
                </div>
                <div id="accordion" className="pjdtaCrr">
                  <div className="card mb-3">
                    <div className="card-header d-fw-bt" id="toggler">
                      <h5 className="font-secondary">Description</h5>
                      <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="faq1" className="" toggler="#toggler">
                      <div className="card-body">
                        <p className="tX-8e14 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                  <div className="card mb-3">
                    <div className="card-header d-fw-bt" id="toggler1">
                      <h5 className="font-secondary" >Properties</h5>
                      <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="faq2" className="" toggler="#toggler1">
                      <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-around pt-3">
                          <div className="pjctPrpt text-center mb-3">
                            <p className="tX-10c14 mb-2">Background</p>
                            <p className="tX-ff14 mb-2">Volcano</p>
                            <p className="tX-8e14 mb-2">11% have this trait</p>
                          </div>
                          <div className="pjctPrpt text-center mb-3 mx-2">
                            <p className="tX-10c14 mb-2">Background</p>
                            <p className="tX-ff14 mb-2">Volcano</p>
                            <p className="tX-8e14 mb-2">11% have this trait</p>
                          </div>
                          <div className="pjctPrpt text-center mb-3">
                            <p className="tX-10c14 mb-2">Background</p>
                            <p className="tX-ff14 mb-2">Volcano</p>
                            <p className="tX-8e14 mb-2">11% have this trait</p>
                          </div>
                        </div>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tcejp-r">
                  <div className="tcejp-rXob1 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-12 mb-2">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <p className="tX-8e14">Blobs By Peter The Roman</p>
                            <h4 className="tX-f525">Blob #125</h4>
                             <p className="tX-8e14 mb-3 pr-4">Owned by <a href="" className="Txc-10c3 pjctLnk">John</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pjctGb tcejp-rXob2 mb-3">
                    <p className="green-txt mb-3"><img src={clock} className="mr-2" />Sale ends November 27,2021 at 10:51am IST</p>
                    <div className="d-flex justify-content-start flex-wrap mb-3">
                      <div className="d-flex flex-column text-center timeBox mr-3">
                        <div className="timerCnt">
                          20
                        </div>
                        <span>Hours</span>
                      </div>
                      <div className="d-flex flex-column text-center timeBox mr-3">
                        <div className="timerCnt">
                          45
                        </div>
                        <span>Minutes</span>
                      </div>
                      <div className="d-flex flex-column text-center timeBox mr-3">
                        <div className="timerCnt">
                          56
                        </div>
                        <span>Seconds</span>
                      </div>
                    </div>
                    <p className="tX-8e14">Top Bid</p>
                    <h4 className="tX-f525"><img src={collTblIcon2} className="mr-2" />0.35<span className="tX-8e14 pl-2">($1,178.58)</span></h4>
                    <div className="Log-Ntb d-flex pt-3 flex-wrap">
                      <a href="#" className="Grd-Btn active mr-3 mb-3" data-toggle="modal" data-target="#W-c-001">Place Bid</a>
                    </div>
                  </div>
                  <div className="pjdtaCrr">
                    <div className="card mb-3">
                      <div className="card-header d-fw-bt" id="toggler6">
                        <h5 className="font-secondary">Price History</h5>
                        <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                      </div>
                      <UncontrolledCollapse id="pjdtfaq1" className="" toggler="#toggler6">
                        <div className="card-body pb-4">
                          <div className="d-flex pt-3 px-0 align-items-center flex-wrap">
                            <div className="pjctGrphFrm mb-3 mr-4">
                              <select className="custom-select form-control">
                                <option>All Time</option>
                                <option>All Time</option>
                                <option>.....</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <p className="tX-8e14 mb-2">All Time Avg. Price</p>
                              <h4 className="tX-f520">0.121 </h4>
                            </div>
                          </div>
                          <div className="pjdtgrph">
                            <img src={prjDetImg2} className="img-fluid" />
                          </div>
                        </div>
                      </UncontrolledCollapse>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div id="accordion" className="pjdtaCrr">
                  <div className="card">
                    <div className="card-header  d-fw-bt" id="toggler9">
                        <h5 className="font-secondary">Bidding History</h5>
                        <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="pjdtfaq5" className="" toggler="#toggler9">
                      <div className="card-body">
                        <div className="llocTbl trdhss table-responsive">
                            <table className="table table-borderless mb-0">
                              <thead>
                                <tr>
                                  <th scope="col">Highest Bid</th>
                                  <th scope="col">To</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Amount($)</th>
                                  <th scope="col">Date & Time</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Petertheroman</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>&55</td>
                                  <td>N-v 17,2021 10:15AM</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Petertheroman</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>&55</td>
                                  <td>N-v 17,2021 10:15AM</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Petertheroman</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>&55</td>
                                  <td>N-v 17,2021 10:15AM</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Petertheroman</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>&55</td>
                                  <td>N-v 17,2021 10:15AM</td>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Petertheroman</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>&55</td>
                                  <td>N-v 17,2021 10:15AM</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pjctGb tcejp-rXob2 mb-3 congCnt">
                  <h4 className="tX-f525 text-center">Congratulations</h4>
                  <div className="d-flex justify-content-center my-3">
                    <img src={congProf} className="congProfPic" />
                  </div>
                  <p className="green-txt text-center mb-2">Petertheroman</p>
                  <p className="text-center greyTxt">won this bidding</p>
                  <h4 className="text-center whiteTxt mt-3"><img src={collTblIcon2} className="mr-2" />0.27 WETH</h4>
                  <img src={championCup} className="championCup" />
                </div>
              </div>
            </div>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default AuctionDetails;