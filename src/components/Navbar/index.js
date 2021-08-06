import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';

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

  import { auth } from '../../firebase/firebase.utils';


const Navbar = ({ currentUser, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  


  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            Medery
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              durations={500}
              spy={true} 
              exact='true'
              offset={-80}
              >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing"
              smooth={true}
              durations={500}
              spy={true} 
              exact='true'
              offset={-80}
              >
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="partner"
              smooth={true}
              durations={500}
              spy={true} 
              exact='true'
              offset={-80}
              >
                Partner With Us
              </NavLinks>
            </NavItem>
            { 
              currentUser ?
                null
              :
                <NavItem>
                  <NavLinks to="signup"
                  smooth={true}
                  durations={500}
                  spy={true} 
                  exact='true'
                  offset={-80}
                  >
                    Sign Up
                  </NavLinks>
                </NavItem>
            }
          </NavMenu>
          <NavBtn>
            {
            currentUser ? 
              <NavBtnLink onClick={() => auth.signOut()}>Sign Out</NavBtnLink> 
              :
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            }
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>      
    </>
  );
};
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navbar);