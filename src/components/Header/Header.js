import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand } from "reactstrap";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="#">
          <img src={logo} alt="sdf" width="100px" />
        </NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/checkout'}>CheckOut</Link>
          
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
