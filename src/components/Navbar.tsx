import React from "react";
import { NavbarWrapper, NavbarContainer, NavbarLogo, NavbarUser } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogo>
          <h2>Getting to global</h2>
        </NavbarLogo>
        <NavbarUser>
          <h2>Welcome,</h2>
          <p>Allan Parish</p>
          <div className="divisor" />
          <p>Contact us</p>
        </NavbarUser>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
