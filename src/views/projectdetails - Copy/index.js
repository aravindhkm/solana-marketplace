import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';
import "./css/projectdetails.scss";
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


const Home = (props) => {	
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container>
	        	<div className="row">
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
                        <p className="mb-4">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
                        <p className="mb-4"> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                  <div className="card mb-3">
                    <div className="card-header d-fw-bt" id="toggler2">
                      <h5 className="font-secondary" >Stats</h5>
                      <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="faq3" className="" toggler="#toggler2">
                      <div className="card-body">
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                  <div className="card mb-3">
                    <div className="card-header d-fw-bt" id="toggler3">
                      <h5 className="font-secondary" >Levels</h5>
                      <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="faq4" className="" toggler="#toggler3">
                      <div className="card-body">
                        <p className="mb-4"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                  <div className="card mb-3">
                    <div className="card-header d-fw-bt" id="toggler4">
                      <h5 className="font-secondary" >About Art</h5>
                      <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="faq5" className="" toggler="#toggler4">
                      <div className="card-body">
                        <p className="mb-4">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  It was popularised in the 1960s with the release</p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                  <div className="card mb-3">
                    <div className="card-header d-fw-bt" id="toggler5">
                      <h5 className="font-secondary" >Details</h5>
                      <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="faq6" className="" toggler="#toggler5">
                      <div className="card-body">
                        <p className="mb-4">Dummy text of the printing and typesetting industry. Lorem </p>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tcejp-r">
                  <div className="tcejp-rXob1 mb-4">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-2">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <p className="tX-8e14">Blobs By Peter The Roman</p>
                            <h4 className="tX-f525">Blob #125</h4>
                             <p className="tX-8e14 mb-3 pr-4">Owned by <a href="" className="Txc-10c3 pjctLnk">John</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-2">
                        <div className="d-flex flex-wrap justify-content-lg-end">
                          <div className="jrpDtls d-flex">
                            <button type="button" className="pjctWsbtn">Add to Wishlist</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pjctGb tcejp-rXob2 mb-3">
                    <p className="tX-8e14">Currency Price</p>
                    <h4 className="tX-f525">$1,178.58</h4>
                    <div className="pjcTRdo pt-4">
                      <div className="radio mb-4">
                        <input type="radio" name="radio1" id="radio1" value="option1" />
                        <label for="radio1" className="mb-3">Buy with Exchange</label>
                        <div className="pl-4">
                          <a className="pjctXchBnt" href="">
                            <span>Choose product to exchange</span>
                            <span><i className="fas fa-chevron-right"></i></span></a>
                        </div>
                      </div>
                      <div className="radio">
                        <input type="radio" name="radio1" id="radio2" value="option2" />
                        <label for="radio2" className="mb-3">Buy without Exchange</label>
                        <div className="pl-4">
                          <p className="tX-8e14 mb-3 pr-4">Select Currency to Show Price</p>
                          <div className="pjctGrphFrm mb-3 mr-4 slctcurr">
                              <select className="custom-select form-control">
                                <option>USDT</option>
                                <option>USDT</option>
                                <option>.....</option>
                              </select>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="Log-Ntb d-flex pt-3 flex-wrap">
                      <a href="#" className="Grd-Btn active mr-3 mb-3" data-toggle="modal" data-target="#W-c-001">Buy Now</a>
                      <a href="#" className=" Grd-Btn mb-3" data-toggle="modal" data-target="#W-c-002">Add to Cart</a>
                    </div>
                  </div>
                  <div id="accordion" className="pjdtaCrr">
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
                    <div className="card mb-3">
                      <div className="card-header d-fw-bt" id="toggler7">
                        <h5 className="font-secondary" >Listings</h5>
                        <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                      </div>
                      <UncontrolledCollapse id="pjdtfaq2" className="" toggler="#toggler7">
                        <div className="card-body">
                          <div className="llocTbl trdhss table-responsive px-0">
                            <table className="table table-borderless mb-0">
                              <thead>
                                <tr>
                                  <th scope="col">Price</th>
                                  <th scope="col">USD Price</th>
                                  <th scope="col">Expiration</th>
                                  <th scope="col">From</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>$1,178.58s</td>
                                  <td>in 2 days</td>
                                  <td>Holdmyquarters</td>
                                </tr>
                                <tr>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>$1,178.58s</td>
                                  <td>in 2 days</td>
                                  <td>Holdmyquarters</td>
                                </tr>
                                <tr>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>$1,178.58s</td>
                                  <td>in 2 days</td>
                                  <td>Holdmyquarters</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </UncontrolledCollapse>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header d-fw-bt" id="toggler8">
                        <h5 className="font-secondary" >Offers</h5>
                        <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                      </div>
                      <UncontrolledCollapse id="pjdtfaq3" className="" toggler="#toggler8">
                        <div className="card-body">
                          <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                      </UncontrolledCollapse>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div id="accordion" className="pjdtaCrr">
                  <div className="card">
                    <div className="card-header  d-fw-bt" id="toggler9">
                        <h5 className="font-secondary">Trading History</h5>
                        <p className="mb-0"><i className="fa" aria-hidden="true"></i></p>
                    </div>
                    <UncontrolledCollapse id="pjdtfaq5" className="" toggler="#toggler9">
                      <div className="card-body">
                        <div className="llocTbl trdhss table-responsive">
                            <table className="table table-borderless mb-0">
                              <thead>
                                <tr>
                                  <th scope="col">Event</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">From</th>
                                  <th scope="col">To</th>
                                  <th scope="col">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Sale</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>NullAddress</td>
                                  <td>Petertheroman</td>
                                  <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
                                </tr>
                                <tr>
                                  <td>Sale</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>NullAddress</td>
                                  <td>Petertheroman</td>
                                  <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
                                </tr>
                                <tr>
                                  <td>Sale</td>
                                  <td><span className=""><img src={collTblIcon2} className="mr-2" />0.27 WETH</span></td>
                                  <td>NullAddress</td>
                                  <td>Petertheroman</td>
                                  <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                </div>
              </div>
            </div>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default Home;