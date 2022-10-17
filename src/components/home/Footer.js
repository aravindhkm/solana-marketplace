import React, { Component, Fragment, useState, useEffect } from "react";
import {  Input,  Container,  Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import subscribeSend from '../../assets/images/subscribeSend.png';



const Footer = (props) => { 

    return (
      <Fragment>            
        <footer>
          <div className="footerSec">
          <div className="container">
            <div className="row pb-3 pt-5 justify-content-center">
              <div className="col-12 col-lg-7 text-center">
                <h3 className="loopTitle">Stay in the loop</h3>
                <p>,Join our mailing list to stay in the loop with our newest feature releases .NFT drops, and tips and tricks for navigating NFT</p>
                <div className="input-group align-items-center subscribeGroup">
                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter Email Address" />
                  <div className="input-group-append">
                    <img src={subscribeSend} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-3 pt-5">
              <div className="col-lg-3 col-md-12">         
                <div className="footerTitle mb-3">
                  <img src={logo} className="img-fluid" />
                </div>  
                <div className="footerTxt mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </div>
                <p>© 2021 NFT. All Rights Reserved</p>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="footerTitle mb-3">Market Place</div>
                  <div>
                    <ul className="list-unstyled footerList">
                      <li><Link to=""><span>Avatars</span></Link></li>
                      <li><Link to=""><span>Video Clips</span></Link></li>
                      <li><Link to=""><span>Ticket to Events</span></Link></li>
                      <li><Link to=""><span>Physical Merchandise</span></Link></li>                  
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="footerTitle mb-3">My Account</div>
                  <div>
                    <ul className="list-unstyled footerList">
                      <li><Link to=""><span>My Profile</span></Link></li>
                      <li><Link to=""><span>My Collections</span></Link></li>
                      <li><Link to=""><span>My Favourites</span></Link></li>                  
                      <li><Link to=""><span>My Account Settings</span></Link></li>                    
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footerTitle mb-3">Company</div>
                  <div>
                    <ul className="list-unstyled footerList">
                      <li><Link to=""><span>About</span></Link></li>
                      <li><Link to=""><span>Blog</span></Link></li>
                      <li><Link to=""><span>Privacy Policy</span></Link></li>                  
                      <li><Link to=""><span>Terms Of Services</span></Link></li>                    
                    </ul>
                  </div>
                </div>
              
            </div>
            
          </div>
        </div>
        </footer>
      </Fragment>
    );

  }



export default Footer;



