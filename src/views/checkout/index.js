import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./css/checkout.scss";
import classnames from 'classnames';
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import collBann from '../../assets/images/coll-bann.png';
import collImg1 from '../../assets/images/coll-img1.png';
import collCoinIcon1 from '../../assets/images/coll-coin-icon1.png';
import collIcon1 from '../../assets/images/coll-icon1.png';
import collIcon2 from '../../assets/images/coll-icon2.png';
import collGrpahImg from '../../assets/images/coll-grpah-img.png';
import collTblIcon2 from '../../assets/images/coll-tbl-icon2.png';
import collTblIcon3 from '../../assets/images/coll-tbl-icon3.png';
import collTblIcon1 from '../../assets/images/coll-tbl-icon1.png';
import clockIcon  from '../../assets/images/clockIcon.png';
import notableBanner1 from '../../assets/images/notableBanner1.png';
import notableBanner2 from '../../assets/images/notableBanner2.png';
import notableBanner3 from '../../assets/images/notableBanner3.png';
import notableBanner4 from '../../assets/images/notableBanner4.png';
import ethIcon from '../../assets/images/eth-icon.png';
import tableProf1 from '../../assets/images/tableProf1.png';
import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';
import blog6 from '../../assets/images/blog6.png';
import arrow from '../../assets/images/header-dd-arrow.png';
import followImg1 from '../../assets/images/follow_img_1.png';
import followImg2 from '../../assets/images/follow_img_2.png';
import followImg3 from '../../assets/images/follow_img_3.png';
import followImg4 from '../../assets/images/follow_img_4.png';


import payImg1 from '../../assets/images/pay_img_1.png';


const Checkout = (props) => {   

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle1 = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Fragment>
        <Header />
        <section className="innerPagescnt">
            <Container className="pb-5">
                <div className="lloc-nbcnt">
                    <div className="w-100 checkoutTabs mt-3">
                        <Nav tabs>
                            <NavItem>
                              <Link className="nav-link green-txt" to="/addtocart">Cart</Link>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                              >
                                Information
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                              >
                                Shipping
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                              >
                                Payment
                              </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                              <Row className="">
                                <div className="col-md-12 col-lg-10 mx-auto">
                                  <div className="black_bg border_radius p-3">
                                    <h6 className="cart_hd">Shipping address</h6>
                                    <form className="com_form">
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" className="form-control" placeholder="Enter First Name (optional)" / >
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Last Name" / >
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="text" className="form-control" placeholder="Enter Email Address" / >
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Enter Phone Number" / >
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" placeholder="Enter Address" / >
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>City</label>
                                            <input type="text" className="form-control" placeholder="Enter City" / >
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>State</label>
                                            <select className="form-control">
                                              <option>Select State</option>
                                              <option>Tamilnadu</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>Zipcode</label>
                                            <input type="text" className="form-control" placeholder="Enter Zipcode" / >
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label>Country</label>
                                            <select className="form-control">
                                              <option>Select Country</option>
                                              <option>India</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="custom-control custom-checkbox pt-1">
                                          <input type="checkbox" className="custom-control-input" id="customCheck1" / >
                                          <label className="custom-control-label" for="customCheck1">I agree with the terms and conditions</label>
                                        </div>
                                        <div className="row pt-3 pb-4 cart_bgs">
                                        <div className="col-lg-3 col-md-6 mb-2">
                                          <button className="btn btn_bg w-100 px-2 py-2">Continue to Shipping</button>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-2">
                                          <button className="btn btn_bg bor_bg w-100 px-2 py-2">Return to Cart</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </Row>
                            </TabPane>
                            <TabPane tabId="2">
                              <Row>
                                <div className="col-md-12 col-lg-10 mx-auto">
                                  <div className="black_bg border_radius p-3">
                                    <h6 className="cart_hd">Contact Details</h6>
                                    <div className="d-flex justify-content-between ship_top flex-wrap">
                                      <div className="d-flex">
                                      <p className="pr-4">Phone Number </p>  <span>+91 678912345</span>
                                    </div>
                                      <a href="#" className="grn_txt"><i className="fa fa-edit mr-2"></i>Change Address</a>
                                    </div>
                                    <div className="d-flex justify-content-between ship_top flex-wrap">
                                      <div className="d-flex">
                                      <p className="pr-4">Email Address </p>  <span>johndoe@gmail.com</span>
                                    </div>
                                      <a href="#" className="grn_txt"><i className="fa fa-edit mr-2"></i>Change Address</a>
                                    </div>
                                    <h6 className="cart_hd pt-3">Ship to</h6>
                                    <div className="radio_btn pb-2">
                                    <div className="custom-control custom-radio mb-2">
                                      <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                      <label className="custom-control-label" for="customRadio1">4,7, City Name, State Name, Country Name, Zipcode</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-2">
                                      <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                      <label className="custom-control-label" for="customRadio2">45,7, City Name, State Name, Country Name, Zipcode</label>
                                    </div>
                                    </div>
                                    <a href="#" className="grn_txt"><i className="fa fa-edit mr-2"></i>Change Address</a>
                                    <div className="row pt-4 pb-3 cart_bgs">
                                        <div className="col-lg-3 col-md-6 mb-2">
                                          <button className="btn btn_bg w-100 px-2 py-2">Continue to Shipping</button>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-2">
                                          <button className="btn btn_bg bor_bg w-100 px-2 py-2">Return to Cart</button>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </Row>
                            </TabPane>
                            <TabPane tabId="3">
                              <Row className="">
                                <div className="col-md-12 col-lg-10 mx-auto">
                                    <form>
                                          <div className="black_bg border_radius p-3">
                                            <h6 className="cart_hd">Contact Details</h6>
                                            <div className="d-flex justify-content-between ship_top flex-wrap">
                                              <div className="d-flex">
                                              <p className="pr-4">Phone Number </p>  <span>+91 678912345</span>
                                            </div>
                                              <a href="#" className="grn_txt"><i className="fa fa-edit mr-2"></i>Change Address</a>
                                            </div>
                                            <div className="d-flex justify-content-between ship_top flex-wrap">
                                              <div className="d-flex">
                                              <p className="pr-4">Email Address </p>  <span>johndoe@gmail.com</span>
                                            </div>
                                              <a href="#" className="grn_txt"><i className="fa fa-edit mr-2"></i>Change Address</a>
                                            </div>
                                            <h6 className="cart_hd pt-3">Ship to</h6>
                                            <div className="radio_btn pb-2">
                                            <div className="custom-control custom-radio mb-2">
                                              <input type="radio" id="customRadioAddr" name="customRadio" className="custom-control-input" />
                                              <label className="custom-control-label" for="customRadioAddr">45,7, City Name, State Name, Country Name, Zipcode</label>
                                            </div>
                                            </div>
                                            <h6 className="cart_hd pb-0">Payment Method</h6>
                                            <p className="gry_txt">All transactions are secure and encrypted</p>
                                            <div className="acc_blks pt-3">
                                                <form>
                                                    <fieldset id="group1">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="radio_btn p-3">
                                                                    <div className="custom-control custom-radio">
                                                                      <input type="radio" id="customRadioOnline" name="customRadio" className="custom-control-input" />
                                                                      <label className="custom-control-label" for="customRadioOnline">Online Payment</label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="">
                                                              <div className="card-body">
                                                                <img src={payImg1} />
                                                              </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <div className="radio_btn p-3">
                                                                    <div className="custom-control custom-radio">
                                                                      <input type="radio" id="customRadioDelivery" name="customRadio" className="custom-control-input" />
                                                                      <label className="custom-control-label" for="customRadioDelivery">Pay On Delivery</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div className="row pt-4 pb-3 cart_bgs">
                                                <div className="col-lg-4 col-md-6 mb-2">
                                                  <button className="btn btn_bg w-100 px-2 py-2">Pay Now</button>
                                                </div>
                                                <div className="col-lg-4 col-md-6 mb-2">
                                                  <button className="btn btn_bg bor_bg w-100 px-2 py-2">Return to Shipping</button>
                                                </div>
                                              </div>
                                          </div>
                                    </form>
                                </div>
                              </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default Checkout;