import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse } from 'reactstrap';
import "./css/about.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';


const About = (props) => {	

  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container className="pb-5">
	        	<div className="about-section">
			        <div className="row justify-content-center">
			          <div className="col-lg-12 col-sm-12 col-md-12">
			            <div className="middle-section-inner">
			              <h2>About Our Company</h2>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacus, tempus aliquam turpis diam
			                amet leo enim. Nisi enim condimentum tincidunt,ornare nam adipiscing. Volutpat lacus, est hendrerit elit
			                sed interdum. amet leo enim. Nisi enim lorem hepotis ipsum tincidunt nam adipiscing. Volutpat lacus.est
			                hendrerit elit sed interdum</p>
			              <p>Astro ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacus, tempus aliquam turpis diam
			                amet leo enim. Nisi enim condimentum tincidunt ornare.nam adipiscing. Volutpat lacus, est hendrerit elit
			                sed interdum. amet leo enim</p>
			            </div>
			          </div>
			          <div className="col-lg-6 col-sm-12 col-md-12">
			            <div className="about-img-box">
			              <div><img src={about1} /></div>
			            </div>
			          </div>
			          <div className="col-lg-6 col-sm-12 col-md-12">
			            <div className="about-img-box">
			              <div><img src={about2} /></div>
			            </div>
			          </div>
			          <div className="col-lg-12 col-sm-12 col-md-12">
			            <div className="middle-section-inner">
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum arcu vel odio condimentum
			                tristique. Praesent velit ligula, dapibus non laoreet in, scelerisque nec nibh. Orci varius natoque
			                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eleifend lectus placerat metus
			                porta, a iaculis tortor sollicitudin. Sed sagittis eleifend massa. Aenean arcu massa, bibendum eu
			                vehicula sed, auctor ut elit. Aliquam fermentum bibendum odio, hendrerit fermentum neque pretium quis.
			                Curabitur et magna porta, laoreet eros at, vulputate mi. Morbi molestie mattis massa sed ultricies.
			                Vestibulum quis arcu risus Vestibulum augue turpis, luctus eget elit sit amet, suscipit ultricies metus.
			                Suspendisse auctor augue massa, ac feugiat lectus sagittis eget tempus aliquam. turpis diam amet feugiat
			                lectus</p>
			            </div>
			          </div>
			        </div>
			      </div>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default About;