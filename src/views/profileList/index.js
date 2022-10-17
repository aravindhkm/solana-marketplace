import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import "./css/profilelist.scss";
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


const ProjectList = (props) => {   

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
            <div className="w-100">
                <div className="Tnlloc-Nnab">
                    <img src={collBann} className="img-fluid profileBanner" />
                </div>
                <div className="lloc-nbcnt">
                    <div className="llocBngB mb-5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <div className="nnBGmi">
                                            <img src={collImg1} className="img-fluid" />
                                        </div>
                                        <div className="llocBngBcnt">
                                            <h4 className="lloc-ff18">Colorful Abstract Painting</h4>
                                            <p className="lloc-8e14 mb-0">0xda83...853a</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cBngBcnt-r d-flex flex-wrap justify-content-end">
                                        <div className="llcDtls">
                                            <p className="lloc-8e14 mb-0">Joined June 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container className="pb-5">
                <div className="lloc-nbcnt">
                    <div className="llocbncnt">
                        <div className="container">
                            <div className="mb-5">
                                <p className="lloc-8e14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 collectionTabs">
                        <Nav tabs>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                              >
                                On Sale
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                              >
                                Owned
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                              >
                                Created
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}
                              >
                                Linked
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle('5'); }}
                              >
                                Activity
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '6' })}
                                onClick={() => { toggle('6'); }}
                              >
                                Following
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === '7' })}
                                onClick={() => { toggle('7'); }}
                              >
                                Followers
                              </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                              <Row className="flex-column-reverse flex-lg-row">
                                <Col sm="12" lg="9">
                                    <Row className="commonCard">
                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="12" lg="3" className="filterCnt">
                                    <div className="drag-box-m blog-l">
                                      <div className="d-flex align-items-start mb-3">
                                        <h1 className="mb-0">Search</h1>
                                        <img src={arrow} id="searchToggler" className="ml-auto d-lg-none" />
                                      </div>
                                      <UncontrolledCollapse className="mt-3" toggler="#searchToggler" defaultOpen={true}>
                                          <div className="drag-box-in d-flex">
                                            <input type="text" name="" placeholder="Search Keyword" />
                                            <a href=""><i className="fas fa-search"></i></a>
                                          </div>
                                      </UncontrolledCollapse>
                                      <h1>Sort By</h1>
                                      <div className="drag-box-in d-flex">
                                        <select>
                                          <option selected="selected">Sort by</option>
                                          <option>Test 1</option>
                                          <option>Test 2</option>
                                        </select>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Status</h1>
                                            <img src={arrow} id="statusToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#statusToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Buy Now
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">On Auction
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Has Offers
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Price</h1>
                                            <img src={arrow} id="priceToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#priceToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                              <Row className="form-row">
                                                <Col xs="12">
                                                    <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle1}>
                                                      <DropdownToggle caret className="d-flex align-items-center">
                                                        <img src={ethIcon} className="mr-2" />
                                                        Ethereum (ETH)
                                                        <img src={arrow} className="ml-auto" />
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                      </DropdownMenu>
                                                    </Dropdown>
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Min" />
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Max" />
                                                </Col>
                                              </Row>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Categories</h1>
                                            <img src={arrow} id="categoryToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#categoryToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Art
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Music
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Avatars
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Video Clips
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Tickets to Events
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Collectibles
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Sports
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">All NFTs
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>

                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Collections</h1>
                                            <img src={arrow} id="collectionToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#collectionToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label><label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                    </div>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="2">
                              <Row className="flex-column-reverse flex-lg-row">
                                <Col sm="12" lg="9">
                                    <Row className="commonCard">
                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="12" lg="3" className="filterCnt">
                                    <div className="drag-box-m blog-l">
                                      <div className="d-flex align-items-start mb-3">
                                        <h1 className="mb-0">Search</h1>
                                        <img src={arrow} id="searchToggler" className="ml-auto d-lg-none" />
                                      </div>
                                      <UncontrolledCollapse className="mt-3" toggler="#searchToggler" defaultOpen={true}>
                                          <div className="drag-box-in d-flex">
                                            <input type="text" name="" placeholder="Search Keyword" />
                                            <a href=""><i className="fas fa-search"></i></a>
                                          </div>
                                      </UncontrolledCollapse>
                                      <h1>Sort By</h1>
                                      <div className="drag-box-in d-flex">
                                        <select>
                                          <option selected="selected">Sort by</option>
                                          <option>Test 1</option>
                                          <option>Test 2</option>
                                        </select>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Status</h1>
                                            <img src={arrow} id="statusToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#statusToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Buy Now
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">On Auction
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Has Offers
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Price</h1>
                                            <img src={arrow} id="priceToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#priceToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                              <Row className="form-row">
                                                <Col xs="12">
                                                    <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle1}>
                                                      <DropdownToggle caret className="d-flex align-items-center">
                                                        <img src={ethIcon} className="mr-2" />
                                                        Ethereum (ETH)
                                                        <img src={arrow} className="ml-auto" />
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                      </DropdownMenu>
                                                    </Dropdown>
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Min" />
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Max" />
                                                </Col>
                                              </Row>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Categories</h1>
                                            <img src={arrow} id="categoryToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#categoryToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Art
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Music
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Avatars
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Video Clips
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Tickets to Events
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Collectibles
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Sports
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">All NFTs
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>

                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Collections</h1>
                                            <img src={arrow} id="collectionToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#collectionToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label><label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                    </div>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="3">
                              <Row className="flex-column-reverse flex-lg-row">
                                <Col sm="12" lg="9">
                                    <Row className="commonCard">
                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="12" lg="3" className="filterCnt">
                                    <div className="drag-box-m blog-l">
                                      <div className="d-flex align-items-start mb-3">
                                        <h1 className="mb-0">Search</h1>
                                        <img src={arrow} id="searchToggler" className="ml-auto d-lg-none" />
                                      </div>
                                      <UncontrolledCollapse className="mt-3" toggler="#searchToggler" defaultOpen={true}>
                                          <div className="drag-box-in d-flex">
                                            <input type="text" name="" placeholder="Search Keyword" />
                                            <a href=""><i className="fas fa-search"></i></a>
                                          </div>
                                      </UncontrolledCollapse>
                                      <h1>Sort By</h1>
                                      <div className="drag-box-in d-flex">
                                        <select>
                                          <option selected="selected">Sort by</option>
                                          <option>Test 1</option>
                                          <option>Test 2</option>
                                        </select>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Status</h1>
                                            <img src={arrow} id="statusToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#statusToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Buy Now
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">On Auction
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Has Offers
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Price</h1>
                                            <img src={arrow} id="priceToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#priceToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                              <Row className="form-row">
                                                <Col xs="12">
                                                    <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle1}>
                                                      <DropdownToggle caret className="d-flex align-items-center">
                                                        <img src={ethIcon} className="mr-2" />
                                                        Ethereum (ETH)
                                                        <img src={arrow} className="ml-auto" />
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                      </DropdownMenu>
                                                    </Dropdown>
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Min" />
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Max" />
                                                </Col>
                                              </Row>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Categories</h1>
                                            <img src={arrow} id="categoryToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#categoryToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Art
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Music
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Avatars
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Video Clips
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Tickets to Events
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Collectibles
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Sports
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">All NFTs
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>

                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Collections</h1>
                                            <img src={arrow} id="collectionToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#collectionToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label><label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                    </div>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="4">
                              <Row className="flex-column-reverse flex-lg-row">
                                <Col sm="12" lg="9">
                                    <Row className="commonCard">
                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner1} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>

                                        <Col sm="12" lg="4">
                                          <div className="card">
                                            <div className="imgCnt">
                                                <img src={notableBanner2} />
                                            </div>
                                            <div className="txtCnt">
                                                <Row>
                                                    <Col lg="7">
                                                        <p>Dodo hide the seek</p>
                                                        <p className="greyTxt">Dodo #152</p>
                                                    </Col>
                                                    <Col lg="5" className="text-right">
                                                        <p className="greyTxt">Price</p>
                                                        <p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="footerCnt d-flex justify-content-center">
                                                <a href="" className="green-txt">Buy Now</a>
                                            </div>
                                          </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="12" lg="3" className="filterCnt">
                                    <div className="drag-box-m blog-l">
                                      <div className="d-flex align-items-start mb-3">
                                        <h1 className="mb-0">Search</h1>
                                        <img src={arrow} id="searchToggler" className="ml-auto d-lg-none" />
                                      </div>
                                      <UncontrolledCollapse className="mt-3" toggler="#searchToggler" defaultOpen={true}>
                                          <div className="drag-box-in d-flex">
                                            <input type="text" name="" placeholder="Search Keyword" />
                                            <a href=""><i className="fas fa-search"></i></a>
                                          </div>
                                      </UncontrolledCollapse>
                                      <h1>Sort By</h1>
                                      <div className="drag-box-in d-flex">
                                        <select>
                                          <option selected="selected">Sort by</option>
                                          <option>Test 1</option>
                                          <option>Test 2</option>
                                        </select>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Status</h1>
                                            <img src={arrow} id="statusToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#statusToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Buy Now
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">On Auction
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Has Offers
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Price</h1>
                                            <img src={arrow} id="priceToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#priceToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                              <Row className="form-row">
                                                <Col xs="12">
                                                    <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle1}>
                                                      <DropdownToggle caret className="d-flex align-items-center">
                                                        <img src={ethIcon} className="mr-2" />
                                                        Ethereum (ETH)
                                                        <img src={arrow} className="ml-auto" />
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="d-flex align-items-center">
                                                                <img src={ethIcon} className="mr-2" />
                                                                Ethereum (ETH)
                                                                <img src={arrow} className="ml-auto" />
                                                            </div>
                                                        </DropdownItem>
                                                      </DropdownMenu>
                                                    </Dropdown>
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Min" />
                                                </Col>
                                                <Col xs="6">
                                                    <input type="text" placeholder="Max" />
                                                </Col>
                                              </Row>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Categories</h1>
                                            <img src={arrow} id="categoryToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#categoryToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Art
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Music
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Avatars
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Video Clips
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Tickets to Events
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Collectibles
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Sports
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">All NFTs
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>

                                      <div className="blog-l-box">
                                        <div className="d-flex align-items-start">
                                            <h1 className="mb-0">Collections</h1>
                                            <img src={arrow} id="collectionToggler" className="ml-auto d-lg-none" />
                                        </div>
                                        <UncontrolledCollapse className="mt-3" toggler="#collectionToggler" defaultOpen={true}>
                                            <div className="blog-l-box-m">
                                               
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Creative Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label><label className="containerc">Physical Merchandise
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                              <label className="containerc">Modern Art Collection
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                        </UncontrolledCollapse>
                                      </div>
                                    </div>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Row>
                                    <Col lg="12">
                                        <div className="table-responsive tableCnt my-5">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Item</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>From</th>
                                                        <th>To</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sale</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Transfer</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Sale</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Transfer</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sale</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Transfer</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Sale</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Transfer</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <img src={tableProf1} className="mr-2 prfIcon" />
                                                                <div className="d-flex flex-column">
                                                                    <span>Colorful Abstract Painting</span>
                                                                    <span className="whiteTxt">Paint #8437</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <div className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</div>
                                                                <span>$124.57</span>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td className="green-txt">Null Address</td>
                                                        <td className="green-txt">Petertheroman</td>
                                                        <td>in 2 days <a href=""><img src={collTblIcon3}  className="ml-2" /></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="6">
                                <Row className="justify-content-center">
                                    <Col lg="10">
                                        <Row className="justify-content-center commonCard">
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg1} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg2} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg3} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg4} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg1} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg2} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg3} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg4} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" className="d-flex justify-content-center mt-3">
                                                <button className="btn gradientBtn">Load More</button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="7">
                                <Row className="justify-content-center">
                                    <Col lg="10">
                                        <Row className="justify-content-center commonCard">
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg1} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg2} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg3} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg4} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg1} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg2} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg3} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn">Follow</button>
                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="black_bg border_radius text-center card">
                                                    <div className="user_icon pos_rel">
                                                      <img src={followImg4} />
                                                      <span className="pos_ab">1</span>
                                                    </div>
                                                    <p className="f_14 whiteTxt mb-2">tlsjm45.......hg54hdKshud</p>
                                                    <p className="f_14 green-txt pb-2">20,000.0</p>
                                                    <button className="btn_bg btn bor_bg">Unfollow</button>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" className="d-flex justify-content-center mt-3">
                                                <button className="btn gradientBtn">Load More</button>
                                            </Col>
                                        </Row>
                                    </Col>
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

export default ProjectList;