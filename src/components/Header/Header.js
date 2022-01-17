import React from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText } from "reactstrap";
import logo from '../../assets/images/logo.png';
const Header = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="#">
            <img src={logo} alt="sdf" width='100px' />
        </NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
