import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/Topnft.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import tableProf1 from '../../assets/images/tableProf1.png';
import ethIcon from '../../assets/images/eth-icon.png';


const TopNft = (props) => {	
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container>
	        	<Row className="justify-content-center">
	        		<Col lg="12">
	        			<h3 className="secTitle">Top NFTs</h3>
	        		</Col>
	        		<Col lg="6">
	        			<p className="secSubheading">The top NFTs on OpenSea, ranked by volume, floor price and other statistics</p>
	        		</Col>
	        	</Row>
	        	<div className="d-flex flex-wrap justify-content-center filter-cnt">
	        		<select>
	        			<option>Last 7 Days</option>
	        			<option>Last 1 Week</option>
	        			<option>Last 2 Weeks</option>
	        		</select>
	        		<select>
	        			<option>All Categories</option>
	        			<option>Category 1</option>
	        			<option>Category 2</option>
	        		</select>
	        		<select>
	        			<option>All Chains</option>
	        			<option>Chains 1</option>
	        			<option>Chains 2</option>
	        		</select>
	        	</div>
	        	<Row>
	        		<Col lg="12">
			        	<div className="table-responsive tableCnt my-5">
			        		<table className="table table-hover">
			        			<thead>
			        				<tr>
			        					<th>Collection</th>
			        					<th>Volume</th>
			        					<th>24h %</th>
			        					<th>7d %</th>
			        					<th>Floor Price</th>
			        					<th>Owners</th>
			        					<th>Assets</th>
			        				</tr>
			        			</thead>
			        			<tbody>
			        				<tr>
			        					<td>1 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>2 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>3 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>4 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>5 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>6 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>7 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>8 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>9 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        				<tr>
			        					<td>10 <img src={tableProf1} className="mx-2 prfIcon" /> Colorful Abstract Painting</td>
			        					<td className="whiteTxt"><img src={ethIcon} className="mr-2" />0.27</td>
			        					<td className="text-danger">-15.25%</td>
			        					<td className="text-success">+15.25%</td>
			        					<td>---</td>
			        					<td>3.2K</td>
			        					<td>10K</td>
			        				</tr>
			        			</tbody>
			        		</table>
			        	</div>
	        		</Col>
	        	</Row>
	        </Container>
        </section>
        <Footer />
      </Fragment>
    );
    
}

export default TopNft;