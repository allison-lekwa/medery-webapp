import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <FontAwesomeIcon icon={faFacebook} color='white' />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'
              aria-label="Instragram">
                <FontAwesomeIcon icon={faInstagram} color='white' />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'
              aria-label="Youtube">
                <FontAwesomeIcon icon={faYoutube} color='white' />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'
              aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} color='white' />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
