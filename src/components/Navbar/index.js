import React, { useEffect, useState } from 'react'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


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
  import { selectCurrentUser } from '../../redux/user/user.selectors';


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
    
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            Medery
          </NavLogo>
          <MobileIcon onClick={toggle}>
          <FontAwesomeIcon icon={faBars} color='white' />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              spy={true} 
              durations={500}
              exact='true'
              offset={-110}
              >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing"
              smooth={true}
              spy={true}
              durations={500}
              exact='true'
              offset={-80}
              >
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="partner"
              smooth={true}
              spy={true}
              durations={500} 
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
                  spy={true}
                  durations={500}
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
              <NavBtnLink to='/' onClick={() => auth.signOut()}>Sign Out</NavBtnLink> 
              :
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            }
          </NavBtn>
        </NavbarContainer>
      </Nav>
        
    </>
  );
};
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Navbar);