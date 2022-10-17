import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/appearance.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import lightMd from '../../assets/images/light-md.png';
import drkMd from '../../assets/images/drk-md.png';


const Home = (props) => {	
  
    return (
      <Fragment>
        <div className="appERnc-xob">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <div className="accSprt">
                        <p className="acsp14ff">General help</p>
                        <p className="mb-2">Customize how NFT looks on your device</p>
                    </div>
                    <div className="">
                        <button type="button" className="btn themeMd-btn py-2"><img src={lightMd} className="mr-3" />Light Mode</button>
                        <button type="button" className="btn themeMd-btn active py-2"><img src={drkMd} className="mr-3" />Dark Mode</button>
                    </div>
                </div>
            </div>
        </div>
      </Fragment>
    );
    
}

export default Home;