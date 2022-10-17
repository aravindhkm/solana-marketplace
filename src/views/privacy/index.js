import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/privacy.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';


const Privacy = (props) => {	

  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container className="pb-5">
	        	<div className="about-section">
			        <div className="row justify-content-center">
			          <div className="col-lg-12 col-sm-12 col-md-12">
			            <div className="middle-section-inner ms-para-border">
			              <h2>Privacy Policy</h2>
			              <h6>Lorem ipsum dolor sit ametest hendrerit elit sed interdum</h6>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacus, tempus aliquam turpis diam
			                amet leo enim. Nisi enim condimentum tincidunt,ornare nam adipiscing. Volutpat lacus, est hendrerit elit
			                sed interdum. amet leo enim. Nisi enim lorem hepotis ipsum tincidunt nam adipiscing. Volutpat lacus.est
			                hendrerit elit sed interdum</p>
			            </div>
			            <div className="middle-section-inner ms-para-border">
			              <h6>Lorem ipsum dolor sit ametest hendrerit elit sed interdum</h6>
			              <p>Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet augue non
			                porta. Nam egestas dui turpis, non pulvinar nisi
			                rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo, blandit lacus
			                malesuada, scelerisque ante. Suspendisse lacinia
			                tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc porttitor rutrum.
			                Aliquam tempor sapien orci, quis mollis velit laoreet sit
			                amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit amet, consectetur
			                adipiscing elit. Sed varius convallis massa, sed ultrices
			                dolor fermentum id. Nunc vel ex sed sapien hendrerit consequat pharetra a metus Etiam placerat ac turpis
			                ac feugiat consequat sed mi in, consectetur
			                posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit </p>
			            </div>
			            <div className="middle-section-inner ms-para-border">
			              <h6>Lorem ipsum dolor sit ametest hendrerit elit sed interdum</h6>
			              <p>Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat. Pellentesque
			                habitant morbi tristique senectus et netus et malesuada
			                fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur posuere erat. Ut mauris
			                arcu, finibus quis lectus et, hendrerit rutrum erat. Integer
			                varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin pulvinar pharetra. In ut lacinia
			                sem </p>
			            </div>
			            <div className="middle-section-inner ms-para-border">
			              <h6>Lorem ipsum dolor sit ametest hendrerit elit sed interdum</h6>
			              <p>.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum lacus, tempus aliquam turpis diam
			                amet leo enim. Nisi enim condimentum tincidunt
			                ,ornare nam adipiscing. Volutpat lacus, est hendrerit elit sed interdum. amet leo enim. Nisi enim lorem
			                hepotis ipsum tincidunt nam adipiscing. Volutpat lacus
			                .est hendrerit elit sed interdum</p>
			            </div>
			            <div className="middle-section-inner ms-para-border">
			              <h6>Lorem ipsum dolor sit ametest hendrerit elit sed interdum</h6>
			              <p>Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet augue non
			                porta. Nam egestas dui turpis, non pulvinar nisi
			                rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo, blandit lacus
			                malesuada, scelerisque ante</p>
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

export default Privacy;