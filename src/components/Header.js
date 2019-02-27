import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Home from "../routes/Home";
import Page2 from "../routes/Page2";
import Page3 from "../routes/Page3";

const Header = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <LinkContainer to="/">
            <Navbar.Brand>Navbar</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/page2">
              <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/page3">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </div>
    </Router>
  );
};

export default Header;
