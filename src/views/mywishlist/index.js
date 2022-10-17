import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/mywishlist.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import collectionBanner1 from '../../assets/images/collectionBanner1.png';
import collectionBanner2 from '../../assets/images/collectionBanner2.png';
import collectionBanner3 from '../../assets/images/collectionBanner3.png';
import collectionBanner4 from '../../assets/images/collectionBanner4.png';
import ethIcon from '../../assets/images/eth-icon.png';


const MyWishList = (props) => {	
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container>
	        	<Row className="justify-content-center">
	        		<Col lg="12">
	        			<h3 className="secTitle">My Wishlist</h3>
	        		</Col>
	        	</Row>

	        	<Row className="justify-content-center mt-5">
	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner1} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>Art Of The Infinity</p>
          								<p className="greyTxt">Art #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner2} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>Colorful Abstract</p>
          								<p className="greyTxt">Painting #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner3} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>T-Shirt</p>
          								<p className="greyTxt">Shirt #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner4} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>Love in the air</p>
          								<p className="greyTxt">Shirt #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner1} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>Art Of The Infinity</p>
          								<p className="greyTxt">Art #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner2} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>Colorful Abstract</p>
          								<p className="greyTxt">Painting #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner3} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>T-Shirt</p>
          								<p className="greyTxt">Shirt #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>

	        		<Col lg="3">
	        			<div className="card">
      						<div className="imgCnt">
          						<img src={collectionBanner4} />
          					</div>
          					<div className="txtCnt">
          						<Row>
          							<Col lg="7">
          								<p>Love in the air</p>
          								<p className="greyTxt">Shirt #152</p>
          							</Col>
          							<Col lg="5" className="text-right">
          								<p className="greyTxt">Price</p>
          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
          							</Col>
          						</Row>
          					</div>
      					</div>
	        		</Col>
	        	</Row>

	        	<Row className="justify-content-center">
	        		<Col lg="12" className="d-flex justify-content-center">
	        			<button className="btn gradientBtn py-2 my-5">Load More</button>
	        		</Col>
	        	</Row>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default MyWishList;