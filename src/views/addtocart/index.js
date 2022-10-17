import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';
import "./css/addtocart.scss";
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
import binIcon from '../../assets/images/binIcon.png';
import backIcon from '../../assets/images/backIcon.png';


const AddToCart = (props) => {	
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container>
            <div className="row">
              <Col md="12" className="d-flex flex-wrap align-items-center borderedCnt">
                <h3 className="secTitle">Add to Cart</h3>
                <div className="pjctGrphFrm slctcurr ml-auto">
                  <select className="custom-select form-control">
                    <option>USDT</option>
                    <option>USDT</option>
                    <option>.....</option>
                  </select>
                </div>
              </Col>
            </div>
            <div className="row tableRow">
              <Col md="4">
                <div className="d-flex align-items-center">
                  <img src={prjDetImg1} className="imgBanner" />
                  <div className="d-flex flex-column">
                    <p className="tX-8e14">Blobs By Peter The Roman</p>
                    <h4 className="tX-f525">Blob #125</h4>
                    <p className="tX-8e14 mb-3 pr-4">Owned by <a href="" className="Txc-10c3 pjctLnk">John</a></p>
                  </div>
                </div>
              </Col>
              <Col md="4" className="d-flex justify-content-center align-items-center">
                <p className="whiteTxt text-center">$1,178.50</p>
              </Col>
              <Col md="4" className="d-flex justify-content-end align-items-center">
                <img src={binIcon} />
              </Col>
            </div>
            <div className="row tableRow">
              <Col md="4">
                <div className="d-flex align-items-center">
                  <img src={prjDetImg1} className="imgBanner" />
                  <div className="d-flex flex-column">
                    <p className="tX-8e14">Blobs By Peter The Roman</p>
                    <h4 className="tX-f525">Blob #125</h4>
                    <p className="tX-8e14 mb-3 pr-4">Owned by <a href="" className="Txc-10c3 pjctLnk">John</a></p>
                  </div>
                </div>
              </Col>
              <Col md="4" className="d-flex justify-content-center align-items-center">
                <p className="whiteTxt text-center">$1,178.50</p>
              </Col>
              <Col md="4" className="d-flex justify-content-end align-items-center">
                <span><img src={binIcon} /></span>
              </Col>
            </div>
            <div className="row tableRow borderNone">
              <Col md="6">
                <div className="d-flex align-items-center greyTxt">
                  <span><img src={backIcon} className="mr-2" /> Continue Shopping</span>
                </div>
              </Col>
              <Col md="6" className="d-flex justify-content-end align-items-center greyTxt">
                <span><img src={binIcon} className="mr-2" /> Clear All</span>
              </Col>
            </div>
            <div className="row justify-content-end mt-3">
              <Col md="6" xl="4">
                <div className="pjctGb tcejp-rXob2 mb-3 py-5">
                  <Row className="mb-3">
                    <Col xs="6">
                      <p className="greyTxt">Subtotal</p>
                    </Col>
                    <Col xs="6">
                      <p className="greyTxt text-right">$1178.58</p>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col xs="6">
                      <h5 className="greyTxt">Grand Total</h5>
                    </Col>
                    <Col xs="6">
                      <h5 className="green-txt text-right">$1178.58</h5>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md="12">
                      <label className="containerc whiteTxt">I agree with the terms and conditions
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <button className="btn btn-block gradientBtn">Proceed to Checkout</button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default AddToCart;