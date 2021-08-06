import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './footerElements'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
               {/* <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Pricing</FooterLink>
              <FooterLink to='/signin'>Partner With Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>               */}
            </FooterLinkItems>
            <FooterLinkItems>
              {/* <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Pricing</FooterLink>
              <FooterLink to='/signin'>Partner With Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>               */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              {/* <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Pricing</FooterLink>
              <FooterLink to='/signin'>Partner With Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>             */}
            </FooterLinkItems> 
            <FooterLinkItems>
              {/* <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>Pricing</FooterLink>
              <FooterLink to='/signin'>Partner With Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>
              <FooterLink to='/signin'>About Us</FooterLink>               */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Medery
            </SocialLogo>
            <WebsiteRights>Medery © {new Date().getFullYear() } All rights reserved.
              </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank'
              aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'
              aria-label="Instragram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'
              aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'
              aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
