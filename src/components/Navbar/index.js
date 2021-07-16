import React from 'react'
import { GiHospital } from "react-icons/gi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Nav,
   NavbarContainer,
   NavLogo, 
   MobileIcon,
   NavItem,
   NavMenu,
   NavLinks,
   NavBtn,
   NavBtnLink
  } from './NavbarElement';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Medery
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="partner">
                Partner With Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="singup">
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>      
    </>
  );
};

export default Navbar;