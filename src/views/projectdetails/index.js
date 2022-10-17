import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, UncontrolledCollapse, Modal, ModalHeader, ModalBody, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
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
import arrow from '../../assets/images/header-dd-arrow.png';

import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import {devnet_rpc} from '../../config/constants.js';
import {getMintKeyAndMetadata, getDataFromMetdataAccount, getAllNftAddress} from '../../utils/token/getNftData.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'





const ProjectDetails = (props) => {	

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [modal, setModal] = useState(false);
    const toggle1 = () => setModal(!modal);

    const [modal1, setModal1] = useState(false);
    const toggle2 = () => setModal1(!modal1);

    const { metadata } = useParams();
    const [uri,setURI] = useState(null);
    const [load,setLoad] = useState(false);

    useEffect(() => {
      console.log("metadata",metadata); 
      
      (async() => {
        if(metadata != null) {
          setURI(await getMetadataDetails());
          setLoad(true);
         // console.log("info", await getMetadataDetails());
        }
      })();
      


    }, [metadata]);

    const getMetadataDetails = async() => {
      const result = await getDataFromMetdataAccount(
          devnet_rpc,
          metadata
      )
      return result;
    }


  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
          {metadata == null || uri == null ?
            (<Skeleton
            circle
            height="100%"
            containerClassName="avatar-skeleton"
            />) :
            (<Container>
	        	<div className="row">
              <div className="col-lg-6 mb-4">
                <div className="pjctGb mb-4">
                  <div className="pjdtGmi">
                    <img src={`${uri.image}`} className="d-block mx-auto img-fluid" />
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
                        <p className="tX-8e14 pt-3"> {uri?uri.description:""} </p>
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
                      <div className="col-lg-6 mb-2">
                        <div className="d-flex align-items-center">
                          <div className="">
                            <p className="tX-8e14">{uri.symbol}</p>
                            <h4 className="tX-f525"> {uri.name}</h4>
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
                          <a className="pjctXchBnt" onClick={toggle1}>
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
                      <a className="Grd-Btn active mr-3 mb-3">Buy Now</a>
                      <a className=" Grd-Btn mr-3 mb-3">Add to Cart</a>
                      <a className=" Grd-Btn mb-3" onClick={toggle2}>Place Bid</a>
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
            </div>
	        </Container>)
          }
        	
        </section>
        <Modal isOpen={modal} toggle={toggle1} className="productModal">
          <ModalHeader toggle={toggle1}>Product Exchange</ModalHeader>
          <ModalBody>
              <p className="whiteTxt mt-3">Select Product</p>
              <div className="d-flex mb-3">
                <div className="blog-l-box-m w-100">
                  <Row className="form-row filterCnt">
                    <Col xs="12" className="">
                        <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle caret className="d-flex align-items-center">
                            Choose Product Exchange
                            <img src={arrow} className="ml-auto" />
                          </DropdownToggle>
                          <DropdownMenu>
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <tbody>
                                  <tr>
                                    <td>#12</td>
                                    <td>Colourful abstract</td>
                                    <td>$145.00</td>
                                  </tr>
                                  <tr>
                                    <td>#12</td>
                                    <td>Colourful abstract</td>
                                    <td>$145.00</td>
                                  </tr>
                                  <tr>
                                    <td>#12</td>
                                    <td>Colourful abstract</td>
                                    <td>$145.00</td>
                                  </tr>
                                  <tr>
                                    <td>#12</td>
                                    <td>Colourful abstract</td>
                                    <td>$145.00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col xs="12" className="d-flex justify-content-center mt-3">
                      <button className="btn gradientBtn py-2">Exchange</button>
                    </Col>
                  </Row>
                </div>
              </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal1} toggle={toggle2} className="productModal">
          <ModalHeader toggle={toggle2}>Place a Bid</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Price</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><img src={ethIcon} className="mr-2" />ETH</div>
                      </div>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                      <div className="input-group-append">
                        <div className="input-group-text">$ 78.24</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
        <Footer />
      </Fragment>
    );
    
}

export default ProjectDetails;