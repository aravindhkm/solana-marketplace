import React, { useState, useEffect, useReducer, Fragment, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  ModalHeader, ModalBody, ModalFooter, Modal, Button
} from "reactstrap";
import { Route, Link, Redirect, BrowserRouter as Router } from "react-router-dom";

import logo from '../../assets/images/logo.png';
import downArrow from '../../assets/images/header-dd-arrow.png';
import profileIcon from '../../assets/images/header-profile-icon.png';
import walletIcon from '../../assets/images/header-wallet-icon.png';
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import GetWalletCollection from "../../hooks/getWalletNft.js";




const Header = (props) => {
  const { connection } = useConnection();
  const { publicKey, connected, disconnect } = useWallet();
  // let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const [scroll, setScroll] = useState(false);

  // const value = useContext();
  useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    if(publicKey != null) {
      (async() => {
        // await GetWalletCollection(publicKey);
      })();
    }
  }, [publicKey]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle = () => {
    setDropdownOpen(prevState => !prevState);    
  };
  const toggle1 = () => {
    setDropdownOpen1(prevState => !prevState)
  };
  const toggle2 = () => setDropdownOpen2(prevState => !prevState);  

  const logOut = () => {
    console.log("try");
    <WalletDisconnectButton onClick= {"handleClick"}/>
   // onClick= {disconnect}
    console.log("close");
  }

    return (
      <Fragment>
      
      <Navbar expand="xl" fixed="top" className={scroll ? "navbar-dark fixed-top homenavbar px-xl-0 scrolled" : "navbar-dark fixed-top homenavbar px-xl-0"}>
       
        <Container>
          <NavbarBrand><Link to="/" className="nav-link"><span><img src={logo} /></span></Link> </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="w-100 align-items-center" navbar>
              <NavItem className="px-0">
                <input className="headerSearch" type="text" placeholder="Search items,Collections" />
              </NavItem>
              <NavItem className="px-0 ml-lg-auto">
                <Link to="/explore" className="nav-link"><span>Marketplace</span></Link>
              </NavItem>
              <NavItem className="px-0">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle tag="a" data-toggle="dropdown" aria-expanded={dropdownOpen} className="nav-link">
                    <span className="text-white">Explorer
                      <img src={downArrow} className="ml-2" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li className="mb-2"><a onClick={toggle} className="dropdown-item">Art</a></li>
                    <li className="mb-2"><a onClick={toggle} className="dropdown-item">Music</a></li>
                    <li className="mb-2"><a onClick={toggle} className="dropdown-item">Video Clips</a></li>
                    <li className="mb-2"><a onClick={toggle} className="dropdown-item">Avatar</a></li>
                    <li className="mb-2"><a onClick={toggle} className="dropdown-item">Tickets to Events</a></li>
                    <li className="mb-2"><a onClick={toggle} className="dropdown-item">Physical Merchandise</a></li>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem className="px-0">
                <Link to="" className="nav-link"><span>Following</span></Link>
              </NavItem>
              <NavItem className="px-0">
                <Link to="" className="nav-link"><span>Create</span></Link>
              </NavItem>
              <NavItem className="px-0">
                <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                  <DropdownToggle tag="a" data-toggle="dropdown" aria-expanded={dropdownOpen} className="nav-link">
                    <span>
                      <img src={profileIcon} className="ml-2" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li className="mb-2"> <a onClick={toggle1} className="dropdown-item"><Link to="/profile">My Profile</Link></a></li>
                    <li className="mb-2"><a onClick={toggle1} className="dropdown-item"><Link to="/collection">My Collections</Link></a></li>
                    <li className="mb-2"><a onClick={toggle1} className="dropdown-item"><Link to="/mywishlist">My Wishlists</Link></a></li>
                    <li className="mb-2"><a onClick={toggle1} className="dropdown-item"><Link to="/accountsupport">My Account Settings</Link></a></li>
                    <li className="mb-2"><a onClick={toggle1 && disconnect} className="dropdown-item" >Logout</a></li>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem className="px-0">
                {/* <Link to="/connectwallet" className="nav-link btn gradientOutlineBtn"><span>Connect Wallet</span></Link> */}
                <WalletMultiButton className="btn gradientBtn py-2" />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        
      </Navbar>      
      </Fragment>
    );

}

export default Header;

