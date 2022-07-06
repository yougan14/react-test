import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "purple" }} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                to="/products"
                style={{
                  color: "white",
                  marginRight: "5%",
                  textDecoration: "none",
                }}
              >
                Product
              </Link>
              <Link
                to="/task_2"
                style={{
                  color: "white",
                  marginRight: "5%",
                  textDecoration: "none",
                }}
              >
                Task
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
