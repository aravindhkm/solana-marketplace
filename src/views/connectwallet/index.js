import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/connect.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import metamask from '../../assets/images/metamask.png';
import trustWallet from '../../assets/images/trustWallet.png';
import trezorWallet from '../../assets/images/trezorWallet.png';
import phantom from '../../assets/images/phantom.png';


const WalletConnect = (props) => {	
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container>
	        	<Row className="justify-content-center">
	        		<Col lg="12">
	        			<h2 className="secTitle">Connect Wallet</h2>
	        		</Col>
	        	</Row>
	        	<Row className="justify-content-center">
	        		<Col sm="6" lg="4" className="connectWalletCnt my-4">
		        		<div className="card">
		        			<Row>
								
								<Col lg="12" className="mtmaskCnt">
		        					<a><img src={phantom} className="mr-3" />Phantom</a>
		        				</Col>								
		        				<Col lg="12" className="mtmaskCnt">
		        					<a><img src={metamask} className="mr-3" />Metamask</a>
		        				</Col>
		        				<Col lg="12" className="mtmaskCnt">
		        					<a><img src={trustWallet} className="mr-3" />Trustwallet</a>
		        				</Col>
								
		        				
		        			</Row>
		        		</div>
	        		</Col>
	        	</Row>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default WalletConnect;