import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/accountsupport.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import metamask from '../../assets/images/metamask.png';
import trustWallet from '../../assets/images/trustWallet.png';
import trezorWallet from '../../assets/images/trezorWallet.png';


const Home = (props) => {	
  
    return (
      <Fragment>
        <div className="accSprt-xob">
            <div className="accSprt brDbot">
                <p className="acsp14ff">General help</p>
                <p>Visit our help center to learn how to get started with buying, selling, and creating</p>
            </div>
            <div className="accSprt brDbot">
                <p className="acsp14ff">Contact NFT Support</p>
                <p>Can't find the answers you’re looking for You can submit a request here</p>
            </div>
            <div className="accSprt">
                <p className="acsp14ff">Help with a compromised account</p>
                <p className="pb-3">If you believe your account has been compromised, let us know and we can lock your account. This will disable items in your wallet from being bought, sold, or transferred using NFT </p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dbFrm">
                            <select className="custom-select form-control">
                                <option>Describe your Issue</option>
                                <option>Describe your Issue</option>
                                <option>.....</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="btn py-2 gradientBtn" type="button">Lock Account</button>
            </div>
        </div>
      </Fragment>
    );
    
}

export default Home;