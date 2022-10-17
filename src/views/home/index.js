import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./css/Home.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import btnCreateIcon from '../../assets/images/btnCreateIcon.png';
import btnExploreIcon from '../../assets/images/btnExploreIcon.png';
import homeBannerslider1 from '../../assets/images/homeBannerslider-1.png';
import homeBannerslider2 from '../../assets/images/homeBannerslider-2.png';
import homeBannerslider3 from '../../assets/images/homeBannerslider-3.png';
import sliderProf1 from '../../assets/images/sliderProf1.png';
import sliderArrowLeft from '../../assets/images/sliderArrowLeft.png';
import sliderArrowRight from '../../assets/images/sliderArrowRight.png';
import notableBanner1 from '../../assets/images/notableBanner1.png';
import notableBanner2 from '../../assets/images/notableBanner2.png';
import notableBanner3 from '../../assets/images/notableBanner3.png';
import notableBanner4 from '../../assets/images/notableBanner4.png';
import tableProf1 from '../../assets/images/tableProf1.png';
import tableProf2 from '../../assets/images/tableProf2.png';
import tableProf3 from '../../assets/images/tableProf3.png';
import tableTickIcon from '../../assets/images/tableTickIcon.png';
import tableHoldIcon from '../../assets/images/tableHoldIcon.png';
import ethIcon from '../../assets/images/eth-icon.png';
import mktBanner1 from '../../assets/images/mktBanner1.png';
import mktBanner2 from '../../assets/images/mktBanner2.png';
import mktBanner3 from '../../assets/images/mktBanner3.png';
import mktBanner4 from '../../assets/images/mktBanner4.png';
import mktBanner5 from '../../assets/images/mktBanner5.png';
import mktBanner6 from '../../assets/images/mktBanner6.png';
import mktBanner7 from '../../assets/images/mktBanner7.png';
import mktBanner8 from '../../assets/images/mktBanner8.png';
import mktBanner9 from '../../assets/images/mktBanner9.png';
import homeWalletIcon from '../../assets/images/homeWalletIcon.png';
import homeCollectionIcon from '../../assets/images/homeCollectionIcon.png';
import homeAddNftIcon from '../../assets/images/homeAddNftIcon.png';
import homeSaleIcon from '../../assets/images/homeSaleIcon.png';
import trendingIcon1 from '../../assets/images/trendingIcon1.png';
import trendingIcon2 from '../../assets/images/trendingIcon2.png';
import trendingIcon3 from '../../assets/images/trendingIcon3.png';
import trendingIcon4 from '../../assets/images/trendingIcon4.png';
import trendingIcon5 from '../../assets/images/trendingIcon5.png';
import trendingIcon6 from '../../assets/images/trendingIcon6.png';
import trendingIcon7 from '../../assets/images/trendingIcon7.png';
import trendingIcon8 from '../../assets/images/trendingIcon8.png';
import trendingIcon9 from '../../assets/images/trendingIcon9.png';
import trendingBanner1 from '../../assets/images/trendingBanner1.png';
import trendingBanner2 from '../../assets/images/trendingBanner2.png';
import trendingBanner3 from '../../assets/images/trendingBanner3.png';
import partnerLogo1  from '../../assets/images/partnerLogo1.png';
import partnerLogo2  from '../../assets/images/partnerLogo2.png';
import partnerLogo3  from '../../assets/images/partnerLogo3.png';
import partnerLogo4  from '../../assets/images/partnerLogo4.png';
import partnerLogo5  from '../../assets/images/partnerLogo5.png';
import clockIcon  from '../../assets/images/clockIcon.png';


const Home = (props) => {	

	var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <img src={sliderArrowRight} />,
      prevArrow: <img src={sliderArrowLeft} />,
    };
    var settings1 = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      initialSlide: 0,
      infinite: false,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
  
    return (
      <Fragment>
      	<Header />
        <div className="homeContainer">
          <section className="homeBanner">
	          <Container>
	          	<Row>
	          		<Col xl="6" className="bannerTxtcnt d-flex align-items-center">
		          		<div className="w-100">
		          			<h5 className="green-txt">NFT Menta</h5>
		          			<h3>Discover, collect and sell extraordinary NFTs</h3>
		          			<h4>Explore on the world's best & largest NFT marketplace</h4>
		          			<div className="d-flex flex-wrap justify-content-center justify-content-xl-start mt-5">
		          				<button className="btn gradientOutlineBtn mr-3"><span><img src={btnExploreIcon} className="mr-2" />Explore</span></button>
		          				 
		          			</div>
		          		</div>
	          		</Col>
	          		<Col xl="6" className="bannerSlider">
	          			<Slider {...settings}>
	          				<div className="card">
	          					<div className="bannerImgcnt">
	          						<img src={homeBannerslider1} />
	          					</div>
	          					<div className="sliderTxtcnt d-flex align-items-center">
	          						<img className="profPic" src={sliderProf1} />
	          						<div className="d-flex flex-column">
	          							<p>Blob #125</p>
	          							<p className="green-txt mb-0">Petertheroman</p>
	          						</div>
	          					</div>
		          			</div>
		          			<div className="card">
	          					<div className="bannerImgcnt">
	          						<img src={homeBannerslider2} />
	          					</div>
	          					<div className="sliderTxtcnt d-flex align-items-center">
	          						<img className="profPic" src={sliderProf1} />
	          						<div className="d-flex flex-column">
	          							<p>Blob #126</p>
	          							<p className="green-txt mb-0">Petertheroman</p>
	          						</div>
	          					</div>
		          			</div>
		          			<div className="card">
	          					<div className="bannerImgcnt">
	          						<img src={homeBannerslider3} />
	          					</div>
	          					<div className="sliderTxtcnt d-flex align-items-center">
	          						<img className="profPic" src={sliderProf1} />
	          						<div className="d-flex flex-column">
	          							<p>Blob #127</p>
	          							<p className="green-txt mb-0">Petertheroman</p>
	          						</div>
	          					</div>
		          			</div>
	          			</Slider>
	          		</Col>
	          	</Row>
	          </Container>
          </section>

          <section className="notableSec">
          	<h3 className="secTitle">New Arrivals</h3>
          	<Container>
          		<Row>
          			<Col lg="12">
          				<Slider {...settings1}>
          					<div className="card">
          						<div className="d-flex mb-3 align-items-center timeCnt">
	          						<img src={clockIcon} className="mr-2" />
          							<p className="mb-0">5 Days Left</p>
          						</div>
          						<div className="imgCnt">
	          						<img src={notableBanner1} />
	          					</div>
	          					<div className="txtCnt">
	          						<Row>
	          							<Col lg="7">
	          								<p>Dodo hide the seek</p>
	          								<p className="greyTxt">Dodo #152</p>
	          							</Col>
	          							<Col lg="5" className="text-right">
	          								<p className="greyTxt">Price</p>
	          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
	          								<p className="d-flex justify-content-end"><span className="greyTxt">Last</span><img src={ethIcon} className="mx-1" />0.02</p>
	          							</Col>
	          						</Row>
	          					</div>
	          					<div className="footerCnt d-flex justify-content-center">
	          						<a href="" className="green-txt">Buy Now</a>
	          					</div>
          					</div>

          					<div className="card">
          						<div className="d-flex mb-3 align-items-center timeCnt">
	          						<img src={clockIcon} className="mr-2" />
          							<p className="mb-0">5 Days Left</p>
          						</div>
          						<div className="imgCnt">
	          						<img src={notableBanner2} />
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
	          								<p className="d-flex justify-content-end"><span className="greyTxt">Last</span><img src={ethIcon} className="mx-1" />0.02</p>
	          							</Col>
	          						</Row>
	          					</div>
	          					<div className="footerCnt d-flex justify-content-center">
	          						<a href="" className="green-txt">Buy Now</a>
	          					</div>
          					</div>

          					<div className="card">
          						<div className="d-flex mb-3 align-items-center timeCnt">
	          						<img src={clockIcon} className="mr-2" />
          							<p className="mb-0">5 Days Left</p>
          						</div>
          						<div className="imgCnt">
	          						<img src={notableBanner3} />
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
	          								<p className="d-flex justify-content-end"><span className="greyTxt">Last</span><img src={ethIcon} className="mx-1" />0.02</p>
	          							</Col>
	          						</Row>
	          					</div>
	          					<div className="footerCnt d-flex justify-content-center">
	          						<a href="" className="green-txt">Buy Now</a>
	          					</div>
          					</div>

          					<div className="card">
          						<div className="d-flex mb-3 align-items-center timeCnt">
	          						<img src={clockIcon} className="mr-2" />
          							<p className="mb-0">5 Days Left</p>
          						</div>
          						<div className="imgCnt">
	          						<img src={notableBanner4} />
	          					</div>
	          					<div className="txtCnt">
	          						<Row>
	          							<Col lg="7">
	          								<p>Dark Light Angel</p>
	          								<p className="greyTxt">Dark #152</p>
	          							</Col>
	          							<Col lg="5" className="text-right">
	          								<p className="greyTxt">Price</p>
	          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
	          								<p className="d-flex justify-content-end"><span className="greyTxt">Last</span><img src={ethIcon} className="mx-1" />0.02</p>
	          							</Col>
	          						</Row>
	          					</div>
	          					<div className="footerCnt d-flex justify-content-center">
	          						<a href="" className="green-txt">Buy Now</a>
	          					</div>
          					</div>

          					<div className="card">
          						<div className="d-flex mb-3 align-items-center timeCnt">
	          						<img src={clockIcon} className="mr-2" />
          							<p className="mb-0">5 Days Left</p>
          						</div>
          						<div className="imgCnt">
	          						<img src={notableBanner1} />
	          					</div>
	          					<div className="txtCnt">
	          						<Row>
	          							<Col lg="7">
	          								<p>Dodo hide the seek</p>
	          								<p className="greyTxt">Dodo #152</p>
	          							</Col>
	          							<Col lg="5" className="text-right">
	          								<p className="greyTxt">Price</p>
	          								<p className="d-flex justify-content-end"><img src={ethIcon} className="mr-1" />0.02</p>
	          								<p className="d-flex justify-content-end"><span className="greyTxt">Last</span><img src={ethIcon} className="mx-1" />0.02</p>
	          							</Col>
	          						</Row>
	          					</div>
	          					<div className="footerCnt d-flex justify-content-center">
	          						<a href="" className="green-txt">Buy Now</a>
	          					</div>
          					</div>
          				</Slider>
          			</Col>
          		</Row>
          	</Container>
          </section>

          <section className="collectionSec">
          	<Container>
          		<div className="d-flex align-items-start">
          			<h3 className="secTitle text-left mb-5">Top Collections</h3>
          			<div className="gradientCnt ml-auto">
          				<select>
          					<option>Last 7 Days</option>
          					<option>Last 1 Month</option>
          					<option>Last 2 Months</option>
          				</select>
          			</div>
          		</div>
          		<Row className="justify-content-center">
          			<Col lg="10">
	          			<div className="card">
	          				<div className="table-responsive">
	          					<table className="table table-hover">
	          						<thead>
	          							<tr>
	          								<th>Project</th>
	          								<th>Price</th>
	          								<th>Marketplace</th>
	          							</tr>
	          						</thead>
	          						<tbody>
	          							<tr>
	          								<td><div className="imgCnt mr-3 tick"><img src={tableProf1} /></div>Colorful Abstract Painting</td>
	          								<td><img src={ethIcon} className="mr-2" />135,219.21</td>
	          								<td className="text-success">+135.12%</td>
	          							</tr>
	          							<tr>
	          								<td><div className="imgCnt mr-3 tick"><img src={tableProf2} /></div>Colorful Abstract Painting</td>
	          								<td><img src={ethIcon} className="mr-2" />135,219.21</td>
	          								<td className="text-success">+135.12%</td>
	          							</tr>
	          							<tr>
	          								<td><div className="imgCnt mr-3 hold"><img src={tableProf3} /></div>Colorful Abstract Painting</td>
	          								<td><img src={ethIcon} className="mr-2" />135,219.21</td>
	          								<td className="text-success">+135.12%</td>
	          							</tr>
	          							<tr>
	          								<td><div className="imgCnt mr-3 tick"><img src={tableProf1} /></div>Colorful Abstract Painting</td>
	          								<td><img src={ethIcon} className="mr-2" />135,219.21</td>
	          								<td className="text-success">+135.12%</td>
	          							</tr>
	          							<tr>
	          								<td><div className="imgCnt mr-3 tick"><img src={tableProf2} /></div>Colorful Abstract Painting</td>
	          								<td><img src={ethIcon} className="mr-2" />135,219.21</td>
	          								<td className="text-success">+135.12%</td>
	          							</tr>
	          							<tr>
	          								<td><div className="imgCnt mr-3 hold"><img src={tableProf3} /></div>Colorful Abstract Painting</td>
	          								<td><img src={ethIcon} className="mr-2" />135,219.21</td>
	          								<td className="text-success">+135.12%</td>
	          							</tr>
	          						</tbody>
	          					</table>
	          				</div>
	          			</div>
          			</Col>
          		</Row>
          	</Container>
          </section>

          <section className="trendingSec"> 
          	<Container>
          		<div className="d-flex align-items-start">
          			<h3 className="secTitle text-left mb-5">Trending Collections</h3>
          			<div className="gradientCnt ml-auto">
          				<select>
          					<option>Categories1</option>
          					<option>Categories2</option>
          					<option>Categories3</option>
          				</select>
          			</div>
          		</div>
          		<Row>
          			<Col lg="4">
          				<div className="w-100 trendingCnt">
          					<div className="card mb-4">
          						<Row>
          							<Col className="pr-0">
          								<img className="smIcon" src={trendingIcon1} />
          							</Col>
          							<Col className="px-2">
          								<img className="smIcon" src={trendingIcon2} />
          							</Col>
          							<Col className="pl-0">
          								<img className="smIcon" src={trendingIcon3} />
          							</Col>
          						</Row>
          						<Row className="mt-3">
          							<Col>
          								<img src={trendingBanner1} />
          							</Col>
          						</Row>
          					</div>
          					<h3>Creative Art Collection</h3>
          					<div className="d-flex flex-wrap align-items-center">
          						<p>5 Items</p>
          						<li>Created by <img className="profPic mx-2" src={sliderProf1} /> @ John Doe</li>
          					</div>
          				</div>
          			</Col>

          			<Col lg="4">
          				<div className="w-100 trendingCnt">
          					<div className="card mb-4">
          						<Row>
          							<Col className="pr-0">
          								<img className="smIcon" src={trendingIcon4} />
          							</Col>
          							<Col className="px-2">
          								<img className="smIcon" src={trendingIcon5} />
          							</Col>
          							<Col className="pl-0">
          								<img className="smIcon" src={trendingIcon6} />
          							</Col>
          						</Row>
          						<Row className="mt-3">
          							<Col>
          								<img src={trendingBanner2} />
          							</Col>
          						</Row>
          					</div>
          					<h3>Physical Merchandise</h3>
          					<div className="d-flex flex-wrap align-items-center">
          						<p>5 Items</p>
          						<li>Created by <img className="profPic mx-2" src={sliderProf1} /> @ John Doe</li>
          					</div>
          				</div>
          			</Col>

          			<Col lg="4">
          				<div className="w-100 trendingCnt">
          					<div className="card mb-4">
          						<Row>
          							<Col className="pr-0">
          								<img className="smIcon" src={trendingIcon7} />
          							</Col>
          							<Col className="px-2">
          								<img className="smIcon" src={trendingIcon8} />
          							</Col>
          							<Col className="pl-0">
          								<img className="smIcon" src={trendingIcon9} />
          							</Col>
          						</Row>
          						<Row className="mt-3">
          							<Col>
          								<img src={trendingBanner3} />
          							</Col>
          						</Row>
          					</div>
          					<h3>Modern Art Collection</h3>
          					<div className="d-flex flex-wrap align-items-center">
          						<p>5 Items</p>
          						<li>Created by <img className="profPic mx-2" src={sliderProf1} /> @ John Doe</li>
          					</div>
          				</div>
          			</Col>
          		</Row>
          	</Container>
          </section>

          <section className="createSellSec">
          	<h3 className="secTitle mb-5">Create and sell your NFTs</h3>
          	<Container>
      			<Row>
      				<Col lg="3">
      					<div className="card card1">
      						<div className="d-flex justify-content-center mb-4">
      							<img src={homeWalletIcon} />
      						</div>
      						<h3 className="heading">Setup Your Wallet</h3>
      						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
      					</div>
      				</Col>
      				<Col lg="3">
      					<div className="card card2">
      						<div className="d-flex justify-content-center mb-4">
      							<img src={homeCollectionIcon} />
      						</div>
      						<h3 className="heading">Create your collection</h3>
      						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
      					</div>
      				</Col>
      				<Col lg="3">
      					<div className="card card3">
      						<div className="d-flex justify-content-center mb-4">
      							<img src={homeAddNftIcon} />
      						</div>
      						<h3 className="heading">Add your NFTs</h3>
      						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
      					</div>
      				</Col>
      				<Col lg="3">
      					<div className="card card4">
      						<div className="d-flex justify-content-center mb-4">
      							<img src={homeSaleIcon} />
      						</div>
      						<h3 className="heading">List them for sale</h3>
      						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
      					</div>
      				</Col>
      			</Row>
          	</Container>
          </section>

          <section className="mktSec">
          	<h3 className="secTitle">Explore</h3>
          	<Container>
          		<Row>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner1} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Art</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner2} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Music</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner3} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Avatars</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner4} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Video Clips</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner5} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Tickets To Events</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner6} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Collectibles</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner7} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Sports</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner8} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>Physical Merchandise</h3>
          					</div>
          				</div>
          			</Col>
          			<Col md="6" lg="4">
          				<div className="card">
          					<div className="imgCnt">
          						<img src={mktBanner9} />
          					</div>
          					<div className="txtCnt text-center">
          						<h3>All NFTs</h3>
          					</div>
          				</div>
          			</Col>
          		</Row>
          	</Container>
          </section>

          <section className="partnerSec">
          	<Container>
          		<Row>
          			<div className="col-lg-3 col-xl">
          				<div className="partnerCnt">
          					<img src={partnerLogo1} className="img-fluid" />
          				</div>
          			</div>
          			<div className="col-lg-3 col-xl">
          				<div className="partnerCnt">
          					<img src={partnerLogo2} className="img-fluid" />
          				</div>
          			</div>
          			<div className="col-lg-3 col-xl">
          				<div className="partnerCnt">
          					<img src={partnerLogo3} className="img-fluid" />
          				</div>
          			</div>
          			<div className="col-lg-3 col-xl">
          				<div className="partnerCnt">
          					<img src={partnerLogo4} className="img-fluid" />
          				</div>
          			</div>
          			<div className="col-lg-3 col-xl">
          				<div className="partnerCnt">
          					<img src={partnerLogo5} className="img-fluid" />
          				</div>
          			</div>
          		</Row>
          	</Container>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
    
}

export default Home;