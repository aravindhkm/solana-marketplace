import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss';
import {
BrowserRouter as Router,
Route,
Routes, Link
} from 'react-router-dom';
import ViewSettings from './views/settings';
import Home from './views/home';
import WalletConnect from './views/connectwallet';
import TopNft from './views/topnft';
import MyCollection from './views/mycollection';
import MyWishList from './views/mywishlist';
import Create from './views/create';
import Blog from './views/blog';
import BlogDetails from './views/blogdetail';
import Sell from './views/sell';
import About from './views/about';
import Privacy from './views/privacy';
import Terms from './views/terms';
import Collection from './views/collection';
import ProjectDetails from './views/projectdetails';
import Explore from './views/explore';
import Art from './views/art';
import AuctionDetails from './views/auctiondetails';
import ProjectList from './views/profileList';
import AddToCart from './views/addtocart';
import Checkout from './views/checkout';

import "@solana/wallet-adapter-react-ui/styles.css";

class App extends Component {
render() {
return (
   <React.Fragment>
   <Suspense fallback={<div className="loading"></div>}> 
   <Router  history={this.props.history}>
      <Routes>
            <Route
               path="/"
               element={<Home />}
            />
            <Route
               path="/topnft"
               element={<TopNft />}
            />
            <Route
               path="/connectwallet" 
               element={<WalletConnect />}
            />
            <Route
               path="/mycollection"
               element={<MyCollection />}
            />
            <Route
               path="/mywishlist"
               element={<MyWishList />}
            />
            <Route
               path="/create"
               element={<Create />}
            />
            <Route
               path="/blog"
               element={<Blog />}
            />
            <Route
               path="/blogdetails"
               element={<BlogDetails />}
            />
            <Route
               path="/sell"
               element={<Sell />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/privacy"
               element={<Privacy />}
            />
            <Route
               path="/terms"
               element={<Terms />}
            />
            <Route
               path="/profile"
               element={<ViewSettings />}
            />
            <Route
               path="/notification"
               element={<ViewSettings />}
            />
            <Route
               path="/appearance"
               element={<ViewSettings />}
            />
            <Route
               path="/accountsupport"
               element={<ViewSettings />}
            />
            <Route
               path="/collection"
               element={<Collection />}
            />
            <Route
               path="/projectdetails/:metadata"
               element={<ProjectDetails />}
            />
            <Route
               path="/explore"
               element={<Explore />}
            />
            <Route
               path="/art"
               element={<Art />}
            />
            <Route
               path="/auctiondetails"
               element={<AuctionDetails />}
            />
            <Route
               path="/profilelist"
               element={<ProjectList />}
            />
            <Route
               path="/addtocart"
               element={<AddToCart />}
            />
            <Route
               path="/checkout"
               element={<Checkout />}
            />
      </Routes>
   </Router>
   </Suspense>
</React.Fragment>
);
}
}

export default App;
