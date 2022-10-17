import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledCollapse } from 'reactstrap';
import "./css/blog.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import blog1 from '../../assets/images/blog1.png';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import blog4 from '../../assets/images/blog4.png';
import blog5 from '../../assets/images/blog5.png';
import blog6 from '../../assets/images/blog6.png';
import img1 from '../../assets/images/img1.png';
import arrow from '../../assets/images/header-dd-arrow.png';


const Blog = (props) => {	

  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container className="pb-5">
	        	<div className="about-section blog-section">
			        <div className="row justify-content-center">
			          <div className="col-lg-4 col-sm-12 col-md-12">
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
			              <div className="blog-l-box">
			              	<div className="d-flex align-items-start">
			                	<h1 className="mb-0">Top Blog</h1>
			                	<img src={arrow} id="toggler" className="ml-auto d-lg-none" />
			              	</div>
			              	<UncontrolledCollapse className="mt-3" toggler="#toggler" defaultOpen={true}>
				                <div className="blog-l-box-m">
				                  <div className="row">
				                    <div className="col-lg-4 col-sm-12 col-md-12">
				                      <img src={blog1} className="blbm-img" />
				                    </div>
				                    <div className="col-lg-8 col-sm-12 col-md-12">
				                      <p><b>Artist interview: Arran Schonberg</b></p>
				                      <p>03 Nov, 2021</p> 
				                    </div>
				                  </div>
				                </div>
				                <div className="blog-l-box-m">
				                  <div className="row">
				                    <div className="col-lg-4 col-sm-12 col-md-12">
				                      <img src={blog2} className="blbm-img" />
				                    </div>
				                    <div className="col-lg-8 col-sm-12 col-md-12">
				                      <p><b>Artist interview: Arran Schonberg</b></p>
				                      <p>03 Nov, 2021</p> 
				                    </div>
				                  </div>
				                </div>
				                <div className="blog-l-box-m">
				                  <div className="row">
				                    <div className="col-lg-4 col-sm-12 col-md-12">
				                      <img src={blog3} className="blbm-img" />
				                    </div>
				                    <div className="col-lg-8 col-sm-12 col-md-12">
				                      <p><b>Artist interview: Arran Schonberg</b></p>
				                      <p>03 Nov, 2021</p> 
				                    </div>
				                  </div>
				                </div>
			                </UncontrolledCollapse>
			              </div>
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

			              <div className="d-flex align-items-start">
			              	<h1 className="mb-0">Cloud Tag</h1>
			              	<img src={arrow} id="cloudToggler" className="ml-auto d-lg-none" />
			              </div>
			              
			              <UncontrolledCollapse className="mt-3" toggler="#cloudToggler" defaultOpen={true}>
				              <div className="drag-box-in2">
				                  <div><a href="#">Avatars</a></div>
				                  <div><a href="#">Tickets to Events</a></div>
				                  <div><a href="#">Collectibles</a></div>
				                  <div><a href="#">Physical Merchandise</a></div>
				                  <div><a href="#">Music</a></div>
				                  <div><a href="#">Art</a></div>
				              </div>
			              </UncontrolledCollapse>
			            </div>
			          </div>
			          <div className="col-lg-8 col-sm-12 col-md-12">
			            <div className="drag-box-m">
			              <div className="row justify-content-center">
			                <div className="col-lg-6 col-sm-12 col-md-12">
			                  <div className="blog-m-box"> 
			                    <div className="bmb-top">
			                      <div className="bmb-top-inn"><img src={img1} /> Created by @Adison</div>
			                      <img src={blog1} className="bmb-img" />
			                    </div>
			                    <p><b>Announcing Our $100m Raise, Led By A16z</b></p>
			                    <p>03 Nov,2021 &nbsp;&nbsp;&nbsp;02 Comments</p>
			                  </div>
			                </div>
			                <div className="col-lg-6 col-sm-12 col-md-12">
			                  <div className="blog-m-box"> 
			                    <div className="bmb-top">
			                      <div className="bmb-top-inn"><img src={img1} /> Created by @Adison</div>
			                      <img src={blog2} className="bmb-img" />
			                    </div>
			                    <p><b>Announcing Our $100m Raise, Led By A16z</b></p>
			                    <p>03 Nov,2021 &nbsp;&nbsp;&nbsp;02 Comments</p>
			                  </div>
			                </div>
			                <div className="col-lg-6 col-sm-12 col-md-12">
			                  <div className="blog-m-box"> 
			                    <div className="bmb-top">
			                      <div className="bmb-top-inn"><img src={img1} /> Created by @Adison</div>
			                      <img src={blog3} className="bmb-img" />
			                    </div>
			                    <p><b>Announcing Our $100m Raise, Led By A16z</b></p>
			                    <p>03 Nov,2021 &nbsp;&nbsp;&nbsp;02 Comments</p>
			                  </div>
			                </div>
			                <div className="col-lg-6 col-sm-12 col-md-12">
			                  <div className="blog-m-box"> 
			                    <div className="bmb-top">
			                      <div className="bmb-top-inn"><img src={img1} /> Created by @Adison</div>
			                      <img src={blog4} className="bmb-img" />
			                    </div>
			                    <p><b>Announcing Our $100m Raise, Led By A16z</b></p>
			                    <p>03 Nov,2021 &nbsp;&nbsp;&nbsp;02 Comments</p>
			                  </div>
			                </div>
			                <div className="col-lg-6 col-sm-12 col-md-12">
			                  <div className="blog-m-box"> 
			                    <div className="bmb-top">
			                      <div className="bmb-top-inn"><img src={img1} /> Created by @Adison</div>
			                      <img src={blog5} className="bmb-img" />
			                    </div>
			                    <p><b>Announcing Our $100m Raise, Led By A16z</b></p>
			                    <p>03 Nov,2021 &nbsp;&nbsp;&nbsp;02 Comments</p>
			                  </div>
			                </div>
			                <div className="col-lg-6 col-sm-12 col-md-12">
			                  <div className="blog-m-box"> 
			                    <div className="bmb-top">
			                      <div className="bmb-top-inn"><img src={img1} /> Created by @Adison</div>
			                      <img src={blog6} className="bmb-img" />
			                    </div>
			                    <p><b>Announcing Our $100m Raise, Led By A16z</b></p>
			                    <p>03 Nov,2021 &nbsp;&nbsp;&nbsp;02 Comments</p>
			                  </div>
			                </div>
			              </div>
			              <nav aria-label="Page navigation example">
			                <ul className="pagination justify-content-center">
			                  <li className="page-item disabled">
			                    <a className="page-link" href="#" tabindex="-1"><i className="fas fa-chevron-left"></i></a>
			                  </li>
			                  <li className="page-item"><a className="page-link plb" href="#">1</a></li>
			                  <li className="page-item"><a className="page-link plb" href="#">2</a></li>
			                  <li className="page-item"><a className="page-link plb" href="#">3</a></li>
			                  <li className="page-item"><b className="plb">...</b></li>
			                  <li className="page-item"><a className="page-link plb" href="#">10</a></li>
			                  <li className="page-item">
			                    <a className="page-link" href="#"><i className="fas fa-chevron-right"></i></a>
			                  </li>
			                </ul>
			              </nav>
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

export default Blog;