import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import "./css/sell.scss";
import classnames from 'classnames';
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import arrowBox from '../../assets/images/arrowbox.png';
import blob from '../../assets/images/blob.png';
import btc from '../../assets/images/btc.png';
import modernArt from '../../assets/images/modern-art.png';


const Sell = (props) => {	

	const [activeTab, setActiveTab] = useState('1');

  	const toggle = tab => {
	  if(activeTab !== tab) setActiveTab(tab);
	}
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container className="pb-5">
	        	<div className="row">
	               <div className="col-xl-11 mx-auto">
	                  <div className="row">
	                     <div className="col-lg-12">
	                        <div className="d-flex">
	                           <div className="page-arrow pt-3 pr-3">
	                              <a href=""><img src={arrowBox} alt="" /></a> 
	                           </div>
	                           <div className="d-flex align-items-center">
	                              <div className="blobimg-div">
	                                 <img src={blob} alt="" />
	                              </div>
	                              <div className="pl-3">
	                                 <p className="text-lightgray mb-2">Blobs By Peter The Roman</p>
	                                 <h1 className="head-text mb-0">Blob #125</h1>
	                              </div>
	                           </div>
	                        </div>
	                     </div>
	                  </div>
	                  <div className="row mt-5">
	                     <div className="col-lg-7 col-xl-8">
	                     	<Nav tabs className="mb-3 sellmethod-ul">
						        <NavItem>
						          <NavLink
						            className={classnames({ active: activeTab === '1' })}
						            onClick={() => { toggle('1'); }}
						          >
						            <div className="tabli-maindiv">
						            	<div className="tabli-innerdiv">
		                                    <p className="text-lightwhite text-center mb-2">Set Price</p>
		                                    <p className="text-lightgray text-center mb-2">Sell at a fixed or declining price</p>
	                                    </div>
	                                 </div>
						          </NavLink>
						        </NavItem>
						        <NavItem>
						          <NavLink
						            className={classnames({ active: activeTab === '2' })}
						            onClick={() => { toggle('2'); }}
						          >
						            <div className="tabli-maindiv">
						            	<div className="tabli-innerdiv">
		                                    <p className="text-lightwhite text-center mb-2">Highest Bid</p>
		                                    <p className="text-lightgray text-center mb-2">Auction to the highest bidder</p>
	                                    </div>
	                                 </div>
						          </NavLink>
						        </NavItem>
						        <NavItem>
						          <NavLink
						            className={classnames({ active: activeTab === '3' })}
						            onClick={() => { toggle('3'); }}
						          >
						            <div className="tabli-maindiv">
						            	<div className="tabli-innerdiv">
		                                    <p className="text-lightwhite text-center mb-2">Bundle</p>
		                                    <p className="text-lightgray text-center mb-2">Group this item with other to sell</p>
	                                    </div>
	                                 </div>
						          </NavLink>
						        </NavItem>
						    </Nav>
						    <TabContent activeTab={activeTab} className="sellmethod-tabcontent">
						        <TabPane tabId="1">
						          <div className="sellmethod-content">
	                                 <div>
	                                    <p className="text-lightwhite">Price</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-9 col-xl-10">
	                                          <p className="text-lightgray mb-0">Will be on sale until you transfer this item or cancel it. Note = 0.04 is the average Price of  SANJAY  this week (1259.9% compared to last week).</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-3 col-xl-2">
	                                          <div className="select-div">
	                                             <select name="" id="">
	                                                <option value="">1</option>
	                                             </select>
	                                          </div>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Include Ending Price</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-10">
	                                          <p className="text-lightgray mb-0">Adding an ending price will allow this listing to expire, or for the price to be reduced until a buyer is found.</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-2 text-right">
	                                          	<label className="switch">
												  <input type="checkbox" />
												  <span className="slider round"></span>
												</label>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Schedule for a future time</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-10">
	                                          <p className="text-lightgray mb-0">You can schedule this listing to only be buyable at a future date</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-2 text-right">
	                                          <label className="switch">
												  <input type="checkbox" />
												  <span className="slider round"></span>
												</label>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Privacy</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-10">
	                                          <p className="text-lightgray mb-0">You can keep your listing public, or your can specify one address that's allowed to buy it.</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-2 text-right">
	                                          <label className="switch">
												  <input type="checkbox" />
												  <span className="slider round"></span>
												</label>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
						        </TabPane>
						        <TabPane tabId="2">
						          <div className="sellmethod-content">
	                                 <div>
	                                    <p className="text-lightwhite">Minimum Bid</p>
	                                    <div className="row align-items-center">
	                                       <div className="col-6 col-md-8 col-xl-9">
	                                          <p className="text-lightgray mb-0">Set your starting bid price. <a href="" className="text-green">Learn More</a></p>
	                                       </div>
	                                       <div className="col-6 col-md-4 col-xl-3">
	                                          <div className="select-div">
	                                             <select name="" id="">
	                                                <option value="">Amount</option>
	                                             </select>
	                                          </div>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Reserve Price</p>
	                                    <div className="row align-items-center">
	                                       <div className="col-8 col-md-9">
	                                          <p className="text-lightgray mb-2">Create a hidden limit by setting a reserve price. 
	                                          </p>
	                                          <p className="mb-0"> <a href="" className="text-green">Learn More</a> </p>
	                                       </div>
	                                       <div className="col-4 col-md-3 text-right">
	                                          <div className="select-div">
	                                             <select name="" id="">
	                                                <option value="">1</option>
	                                             </select>
	                                          </div>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Expiration Date</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-6 col-md-9">
	                                          <p className="text-lightgray mb-0">Your auction will automatically end at this time and the highest bidder will win. No need to cancel it!</p>
	                                       </div>
	                                       <div className="col-6 col-md-3 text-right">
	                                          <div className="expriydate-box">
	                                             <p className="text-lightwhite text-left mb-0">in 5 days</p>
	                                          </div>
	                                          <p className="text-lightwhite text-left mt-2 mb-0 pl-2">at 12.45 am</p>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div className="instruction-div">
	                                    <select name="" id="">
	                                       <option value="">Instructions</option>
	                                    </select>
	                                 </div>
	                              </div>
						        </TabPane>
						        <TabPane tabId="3">
						        	<div className="sellmethod-content">
	                                 <div>
	                                    <p className="text-lightwhite">Price</p>
	                                    <div className="row align-items-center">
	                                       <div className="col-12 col-md-7 col-lg-8 col-xl-9">
	                                          <p className="text-lightgray mb-0">Will be on sale until you transfer this item or cancel it.</p>
	                                       </div>
	                                       <div className="col-12 col-md-5 col-lg-4 col-xl-3">
	                                          <div className="amount-dropdown dropdown mt-3">
	                                             <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
	                                             <span className="text-left">Amount</span>
	                                             <img src={btc} alt="" className="pl-2" />
	                                             </button>
	                                             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
	                                                <a className="dropdown-item" href="#">
	                                                <span>Amount</span>
	                                                <img src={btc} alt="" className="pl-3" />
	                                                </a>
	                                                <a className="dropdown-item" href="#">
	                                                <span>Amount</span>
	                                                <img src={btc} alt="" className="pl-3" />
	                                                </a>
	                                                <a className="dropdown-item" href="#">
	                                                <span>Amount</span>
	                                                <img src={btc} alt="" className="pl-3" />
	                                                </a>
	                                             </div>
	                                          </div>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Include Ending Price</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-10">
	                                          <p className="text-lightgray mb-0">Adding an ending price will allow this listing to expire, or for the price to be reduced until a buyer is found.</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-2 text-right">
	                                          	<label className="switch">
												  <input type="checkbox" />
												  <span className="slider round"></span>
												</label>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Schedule for a future time</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-10">
	                                          <p className="text-lightgray mb-0">You can schedule this listing to only be buyable at a future date</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-2 text-right">
	                                          	<label className="switch">
												  <input type="checkbox" />
												  <span className="slider round"></span>
												</label>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div>
	                                    <p className="text-lightwhite">Privacy</p>
	                                    <div className="row align-items-center align-items-md-start">
	                                       <div className="col-8 col-md-10 col-lg-10">
	                                          <p className="text-lightgray mb-0">You can keep your listing public, or your can specify one address that's allowed to buy it.</p>
	                                       </div>
	                                       <div className="col-4 col-md-2 col-lg-2 text-right">
	                                          	<label className="switch">
												  <input type="checkbox" />
												  <span className="slider round"></span>
												</label>
	                                       </div>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div className="d-flex align-items-center">
	                                    <div className="">
	                                       <img src={modernArt} alt="" />
	                                    </div>
	                                    <div className="pl-3">
	                                       <h1 className="head-text mb-2">Modern Art Collection</h1>
	                                       <p className="text-lightgray mb-2">Art #125</p>
	                                    </div>
	                                 </div>
	                              </div>
	                              <div className="sellmethod-content mt-3">
	                                 <div className="d-flex align-items-center">
	                                    <div className="">
	                                       <img src={blob} alt="" />
	                                    </div>
	                                    <div className="pl-3">
	                                       <h1 className="head-text mb-2">Approving Blobs</h1>
	                                       <p className="text-lightgray mb-2">Blob #125</p>
	                                    </div>
	                                 </div>
	                              </div>
						        </TabPane>
						    </TabContent>
	                     </div>
	                     <div className="col-lg-5 col-xl-4 mt-3">
	                        <div className="summary-maindiv">
	                           <h2 className="subhead-text">Summary</h2>
	                           <p className="text-lightwhite">Listing</p>
	                           <p className="text-lightgray">Your item will be listed for = 1</p>
	                           <button className="listing-btn">
	                           Post your Listing
	                           </button>
	                           <div className="mt-4 bounties-div">
	                              <p className="text-lightwhite pt-3">Bounties</p>
	                              <p className="text-lightgray">Opensea rewards 1% to registered affiliates who refer your buyer</p>
	                           </div>
	                           <div className="mt-3">
	                              <p className="text-lightwhite">Fees</p>
	                              <p className="text-lightgray">Listng is feel! At the time of the sale, the following fees will be deducted learn more</p>
	                           </div>
	                           <div className="total-maindiv">
	                              <div className="total-div">
	                                 <p className="text-lightgray mb-2">To Opensea</p>
	                                 <p className="text-green mb-2">2.5%</p>
	                              </div>
	                              <div className="total-div">
	                                 <p className="text-lightgray mb-2">To Gopi</p>
	                                 <p className="text-green mb-2">5%</p>
	                              </div>
	                              <div className="total-div">
	                                 <p className="text-lightwhite">Total</p>
	                                 <p className="text-green">7.5%</p>
	                              </div>
	                           </div>
	                        </div>
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

export default Sell;