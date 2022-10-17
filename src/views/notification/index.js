import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/notification.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import ntfCoinIcon1 from '../../assets/images/ntf-coin-icon1.png';


const Home = (props) => {	
  
    return (
      <Fragment>
        <div className="nTfcN-xob">
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Item Sold</p>
                            <p className="mb-0">Customize how NFT looks on your device</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq1" />
                                    <label for="nftChq1"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Price Change</p>
                            <p className="mb-0">When an item you made an offer on changes in price</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq2" />
                                    <label for="nftChq2"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Outbid</p>
                            <p className="mb-0">When an offer you placed is exceeded by another user</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq3" />
                                    <label for="nftChq3"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">OpenSea Newsletter</p>
                            <p className="mb-0">Occasional updates from the NFT team</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq4" />
                                    <label for="nftChq4"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Owned Asset Updates</p>
                            <p className="mb-0">When a significant update occurs for one of the items you have purchased on  NFT </p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq5" />
                                    <label for="nftChq5"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Bid Activity</p>
                            <p className="mb-0">When someone bids on one of your items</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq-r1" />
                                    <label for="nftChq-r1"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Auction Expiration</p>
                            <p className="mb-0">When a Dutch or English auction you created ends</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq-r2" />
                                    <label for="nftChq-r2"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Referral Successful</p>
                            <p className="mb-0">When an item you referred is purchased</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq-r3" />
                                    <label for="nftChq-r3"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="ntTfbg mb-2 d-flex justify-content-between align-items-center">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff mb-2">Successful Purchase</p>
                            <p className="mb-0">When you successfully buy an item</p>
                        </div>
                       <div className="cykChq">
                            <form>
                                <div className="form-group mb-0">
                                    <input type="checkbox" id="nftChq-r4" />
                                    <label for="nftChq-r4"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className=" mb-2 ">
                        <div className="accSprt mb-0">
                            <p className="acsp14ff my-2">Minimum Bid Threshold</p>
                            <p className="mb-0 acsp12gg">Receive notifications only when you receive offers with a value greater than or equal to this amount of ETH </p>
                        </div>
                        <div className="coin-iNngrp input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3"><img src={ntfCoinIcon1} className="mr-2" />Ethereum</span>
                          </div>
                          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value="0.005" />
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center mt-3">
                     <div className="">
                        <button className="btn py-2 gradientBtn" type="button">Save</button>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    );
    
}

export default Home;