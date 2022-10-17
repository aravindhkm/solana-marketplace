import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/profile.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import fileImg from '../../assets/images/file-img.png';
import prfIcon1 from '../../assets/images/prf-scl-icon1.png';
import prfIcon2 from '../../assets/images/prf-scl-icon2.png';
import prfIcon3 from '../../assets/images/prf-scl-icon3.png';
import prfIcon4 from '../../assets/images/prf-scl-icon4.png';


const Home = (props) => {	
  
    return (
      <Fragment>
        <div className="prf-xob ntTfbg">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="prfFLup mb-2">
                        <p className="prf14fff">Profile Image</p>
                        <div className="brwsFl-xob d-flex flex-wrap">
                            <div className="mb-3 mr-4"><img src={fileImg} /></div>
                            <div className="">
                                <p className="prf15f5 mb-2">Drage and Drop Your file</p>
                                <p className="prf148e mb-2">JPG, PNG, GIF, SVG. Max size: 100 MB</p>
                                <p className="prf148e mb-2">or choose a file</p>
                                <div className="prf-uppBtn mt-3">
                                  <button className="btn gradientBtn">Browse Files</button>
                                  <input type="file" name="myfile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="prfFLup mb-2">
                        <p className="prf14fff">Profile Banner</p>
                        <div className="brwsFl-xob d-flex flex-wrap">
                            <div className="mb-3 mr-4"><img src={fileImg} /></div>
                            <div className="">
                                <p className="prf15f5 mb-2">Drage and Drop Your file</p>
                                <p className="prf148e mb-2">JPG, PNG, GIF, SVG. Max size: 100 MB</p>
                                <p className="prf148e mb-2">or choose a file</p>
                                <div className="prf-uppBtn mt-3">
                                  <button className="btn gradientBtn">Browse Files</button>
                                  <input type="file" name="myfile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PrfFrm">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">User Name<span>*</span></label>
                            <input type="text" className="form-control" id="" placeholder="Enter Username" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">Email Address<span>*</span></label>
                            <input type="text" className="form-control" id="" placeholder="Enter Email Address" />
                        </div>
                    </div>
                     <div className="col-md-12">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">Bio</label>
                            <textarea className="form-control is-invalid pt-3" rows="4" id="validationTextarea" placeholder="Enter Bio" required></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">Twitter Link</label>
                            <div className="input-group mb-3 ">
                              <input type="text" className="form-control" placeholder="Enter Twitter Link" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><img src={prfIcon1} /></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">Instagram Link</label>
                            <div className="input-group mb-3 ">
                              <input type="text" className="form-control" placeholder="Enter Instagram Link" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><img src={prfIcon2} /></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">Your Site</label>
                            <div className="input-group mb-3 ">
                              <input type="text" className="form-control" placeholder="Enter Your site link" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><img src={prfIcon3} /></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group prfiNpp">
                            <label for="" className="iNpTit">Wallet Address</label>
                            <div className="input-group mb-3 ">
                              <input type="text" className="form-control" placeholder="0x00a1a36f9dfeb292b8ajh34876hfghgk" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><img src={prfIcon4} /></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-3">
                         <div className="">
                            <button className="btn gradientBtn py-2" type="button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    );
    
}

export default Home;