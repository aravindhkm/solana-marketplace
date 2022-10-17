import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import "./css/explore.scss";
import classnames from 'classnames';
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

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
import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';
import blog6 from '../../assets/images/blog6.png';
import arrow from '../../assets/images/header-dd-arrow.png';


const Explore = (props) => {	

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
			        <Row className="justify-content-center my-5">
			        	<Col lg="12">
		        			<h3 className="secTitle">All NFT's</h3>
		        		</Col>
			        </Row>
		        	<Row className="flex-column-reverse flex-lg-row">
					  	<Col sm="12" lg="9">
					  		<Row className="commonCard">
							    <Col sm="12" lg="4">
							      <div className="card">
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
								    <div className="d-flex mb-3 align-items-center timeCnt">
		          						<img src={clockIcon} className="mr-2" />
	          							<p className="mb-0">5 Days Left</p>
	          						</div>
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
		        </div>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default Explore;