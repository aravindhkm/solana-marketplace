import React, { Component, Fragment, useEffect, useState, useMemo} from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import "./css/collection.scss";
import classnames from 'classnames';
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
import collBann from '../../assets/images/coll-bann.png';
import collImg1 from '../../assets/images/coll-img1.png';
import collCoinIcon1 from '../../assets/images/solana-logo.png';
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
import ethIcon from '../../assets/images/solana-logo-16-22.png';
import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';
import blog6 from '../../assets/images/blog6.png';
import arrow from '../../assets/images/header-dd-arrow.png';

import {devnet_rpc} from '../../config/constants.js';
import {getMintKeyAndMetadata, getDataFromMetdataAccount, getAllNftAddress} from '../../utils/token/getNftData.js';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Redirect, Link, useNavigate } from "react-router-dom";



const Collection = (props) => {	

	const [activeTab, setActiveTab] = useState('1');
	const [hasMore,setHashMore] = useState(true);

	const [sampleArr,setSampleArr] = useState([]);
	const [publicKey,setPublicKey] = useState([]);
	const [metadata,setMetadata] = useState([]);
	const [uri,setURI] = useState([]);
	const [loading,setLoading] = useState(false);
	const [collectionInfo, setCollectionInfo] = useState([{
		mintkey: '',
		metadata: '',
		uri: ''
	}]);

	const { connection } = useConnection();
	const wallet = useWallet();
	//let navigate = useNavigate();
	const navigate = useNavigate();




  	const toggle = tab => {
	  if(activeTab !== tab) setActiveTab(tab);
	}

	const [dropdownOpen, setDropdownOpen] = useState(false);

  	const toggle1 = () => setDropdownOpen(prevState => !prevState);

	useEffect(() => {
		setSampleArr(
			[...sampleArr, 1,2,3,4,5,6]
		);
		// console.log("env", wallet.publicKey.toBase58());

		if(wallet != null) {
			findUserMetada().then(t => {
				t.map(async(ele) => {
					//console.log("ele", await(ele));
					//let d = await(ele);
					//setPublicKey(key => [d,...key]);
					//setMetadata(await(ele).metadata);
					
					 //console.log("ele 1", d);
					console.log("ele", await(await(ele)).metadata);
					// return ((ele).metadata);

					const metadata = await(await(ele)).metadata;
					const mintKey = await(await(ele)).address;
					try{
						getDataFromMetdataAccount(devnet_rpc,metadata).then(
							(u) => {
								console.log("uri", u.image);
								setURI(key => [u,...key]);
								setPublicKey(key => [mintKey,...key]);
								setMetadata(key => [metadata,...key]);
								// setCollectionInfo(
								// 	key => [{
								// 		mintkey: '',
								// 		metadata: '',
								// 		uri: u
								// 	},...key]
								// )
								//setLoading(true);
							}
						)
					}catch {}
				})
				setLoading(true);
				// .then((m) => {
				// 	getDataFromMetdataAccount(m)
				// });
			});

			//console.log("then", findUserMetada())

			// findUserMetada().then(console.log); 	
		}
	}, [wallet,connection])


	useEffect(() => {
		console.log("lengthCheck", lengthCheck());

	}, [loading]);

	const lengthCheck = () => {
		return publicKey.length;
	}

	const findUserMetada = () => {
		return new Promise(resolve =>
			resolve(getAllNftAddress(devnet_rpc,wallet.publicKey)));
	};
		// await getAllNftAddress(devnet_rpc,wallet.publicKey).then(
		// 	value =>  {return value}
		// );
		//console.log("value", value);

		// return (value);
	//};

	// const loadAllCollection = useMemo(() => {
	// 	if(wallet == null) {
	// 		return;
	// 	}
	// 	findUserMetada().then(t => {
	// 		t.map(async(ele) => {
	// 			//console.log("ele", await(ele));
	// 			//let d = await(ele);
	// 			//setPublicKey(key => [d,...key]);
	// 			//setMetadata(await(ele).metadata);
				
	// 			 //console.log("ele 1", d);
	// 			console.log("ele", await(await(ele)).metadata);
	// 			// return ((ele).metadata);
	// 			try{
	// 				getDataFromMetdataAccount(devnet_rpc,await(await(ele)).metadata).then(
	// 					(u) => {
	// 						console.log("uri", u.image);
	// 						setURI(key => [u,...key]);
	// 						setPublicKey(key => [(ele).address,...key]);
	// 						setMetadata(key => [(ele).metadata,...key]);
	// 						//setLoading(true);
	// 					}
	// 				)
	// 			}catch {}
	// 		})
	// 		setLoading(true);
	// 		// .then((m) => {
	// 		// 	getDataFromMetdataAccount(m)
	// 		// });
	// 	});
	// }, [wallet]);



	const fetchMoreData = () => {
		console.log("hello")
		console.log("before length", sampleArr.length)
		
		if (sampleArr.length >= 15) {
			setHashMore(false);
			return;
		}

		setSampleArr([...sampleArr,11,12,13]);

		// setTimeout(() => {
		// }, 10);
	};

	const navDetails = (index) => {
		
		// return <Redirect to='/projectdetails'/>
		// const getM = metadata.at(index);
		// console.log("metadata length", metadata.length)
		// console.log("test nav",getM, index, metadata[index]);
		let path = "projectdetails/" + metadata.at(index); 
		navigate("/projectdetails/" + metadata.at(index));
	}
  
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
		                                    <p className="lloc-8e14 mb-0">Created by {() => lengthCheck()}<a href="" className="Txc-10c3">Johnny</a></p>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-lg-6">
		                            <div className="cBngBcnt-r d-flex flex-wrap justify-content-around">
		                                <div className="llcDtls">
		                                    <h4 className="lloc-ff18">10.0K</h4>
		                                    <p className="lloc-8e14 mb-0">Items</p>
		                                </div>
		                                <div className="llcDtls">
		                                    <h4 className="lloc-ff18">3.2K</h4>
		                                    <p className="lloc-8e14 mb-0">Owners</p>
		                                </div>
		                                <div className="llcDtls">
		                                    <h4 className="lloc-ff18"><img src={collCoinIcon1} className="mr-1" />0.1</h4>
		                                    <p className="lloc-8e14 mb-0">Floor Price</p>
		                                </div>
		                                <div className="llcDtls">
		                                    <h4 className="lloc-ff18"><img src={collCoinIcon1} className="mr-1" />697.1K</h4>
		                                    <p className="lloc-8e14 mb-0">Volume Traded</p>
		                                </div>
		                                <div className="llcDtls d-flex">
		                                    <a href="" className="llcshRRpt"><img src={collIcon1} /></a>
		                                    <a href="" className="llcshRRpt ml-2"><img src={collIcon2} /></a>
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
					            Items ${publicKey.length}
					          </NavLink>
					        </NavItem>
							{/* <NavItem>
					          <NavLink
					            className={classnames({ active: activeTab === '2' })}
					            onClick={() => { toggle('2'); }}
					          >
					            Collected
					          </NavLink>
					        </NavItem> */}
					        <NavItem>
					          <NavLink
					            className={classnames({ active: activeTab === '3' })}
					            onClick={() => { toggle('3'); }}
					          >
					            Activity
					          </NavLink>
					        </NavItem>
						</Nav>
						<TabContent activeTab={activeTab}>

							<TabPane tabId="1">

							  <Row className="flex-column-reverse flex-lg-row">
							  	<Col sm="12" lg="9">								
								<Row className="commonCard" >								
								<div id="scrollableDiv" style={{ width: "100%", height: 1400, overflow: "auto",  display: 'flex', }} >
								<InfiniteScroll
									dataLength={sampleArr.length}
									next={fetchMoreData}
									style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap'}} //To put endMessage and loader to the top.
									hasMore={hasMore}
									loader={
										<h4>Loading...</h4>
										// <Skeleton
										// paragraph={{
										// 	rows: 2,
										// }}
										// active
										// />
									}
									endMessage={
										//<p style={{ textAlign: "center" }}>
										<b>Yay! You have seen it all</b>
										//</p>
										// <Divider plain>It is all, nothing more</Divider>
									}
									// scrollableTarget="scrollableDiv"
                				>

							    {uri.map((getData, index) => (	
									    <Col sm="12" lg="4">
										<div className="card" style={{width: "250px"}} onClick={() => navDetails(index)}>
											<div className="imgCnt" >
												<img src={`${getData.image}`} />
											</div>
											<div className="txtCnt">
												<Row>
													<Col lg="7">
														<p>{getData.name}</p>
														<p className="greyTxt">{getData.description}</p>
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
								))}
								</InfiniteScroll>
								</div>
																	
								</Row>

									    {/* <Col sm="12" lg="4">
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
									    </Col> */}

									    {/* <Col sm="12" lg="4">
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
									    </Col> */}

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
							  <div className="llocacTvTy">
				                <div className="container">
				                    <div className="llocGrphxB d-flex align-items-center justify-content-between mb-5 flex-wrap">
				                        <div className="lcGrphFrm mb-3">
				                            <select className="custom-select form-control">
				                                <option>Last 90 Days</option>
				                                <option>Last 50 Days</option>
				                                <option>.....</option>
				                            </select>
				                        </div>
				                        <div className=" d-flex flex-wrap">
				                            <div className="llcDtls mr-5">
				                                <p className="lloc-8e14 mb-2">90 Day Avg. Price</p>
				                                <h4 className="lloc-ff18">0.121 </h4>
				                            </div>
				                            <div className="llcDtls">
				                                <p className="lloc-8e14 mb-2">90 Day Volume</p>
				                                <h4 className="lloc-ff18">61.5828 </h4>
				                            </div>
				                        </div>
				                    </div>
				                    <div className="row">
				                        <div className="col-10 mx-auto">
				                            <div className="llocGrphGmi mb-5">
				                                <div className="">
				                                    <img src={collGrpahImg} className="img-fluid" />
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                    <div className="llocTbl table-responsive mb-5">
				                        <table className="table table-borderless mb-0">
				                          <thead>
				                            <tr>
				                              <th></th>
				                              <th scope="col">Item</th>
				                              <th scope="col">Price</th>
				                              <th scope="col">Quantity</th>
				                              <th scope="col">From</th>
				                              <th scope="col">To</th>
				                              <th scope="col">Date</th>
				                            </tr>
				                          </thead>
				                          <tbody>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src="images/coll-tbl-icon1.png" className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1.png} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                            <tr>
				                              <td>Sale</td>
				                              <td><img src={collTblIcon1} className="mr-3" />Colorful Abstract Painting</td>
				                              <td><span  className="Txc-f5f5"><img src={collTblIcon2} className="mr-2" />0.27</span><br /><span>$124.57</span></td>
				                              <td>1</td>
				                              <td><span className="Txc-10c3">NullAddress</span></td>
				                              <td><span className="Txc-10c3">Petertheroman</span></td>
				                              <td>in 2 days<img src={collTblIcon3} className="ml-2" /></td>
				                            </tr>
				                          </tbody>
				                        </table>
				                    </div>
				                </div>
				            </div>
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

export default Collection;