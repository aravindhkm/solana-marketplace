import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Redirect, Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./css/settings.scss";
import Header from "../../components/home/Header"; 
import Footer from "../../components/home/Footer";
import Profile from '../profile';
import Notification from '../notification';
import Appearance from '../appearance';
import AccountSupport from '../accountsupport';



const Innerpages = () => {

    return (
    <Fragment>
      <Header />
      <section className="innerPagescnt">
        <Container>
          <div className="row justify-content-center">
              <Col xl="12">
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center settings-tab-cnt">
                      <li>
                        <Link to="/profile" className="active">
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/notification">
                          <span>Notification</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/appearance">
                          <span>Appearance</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/accountsupport">
                          <span>Account Support</span>
                        </Link>
                      </li>
                  </ul>
              </Col>
              <div className="col-lg-10 col-md-9">
                  <Routes>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/notification" component={Notification} />
                    <Route exact path="/appearance" component={Appearance} />
                    <Route exact path="/accountsupport" component={AccountSupport} />
                  </Routes>
              </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Fragment>
  );

}
 
export default Innerpages;