import React from 'react'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { 
  SidebarContainer, 
  CloseIcon, 
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle, currentUser}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink  to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink  to="pricing" onClick={toggle}>
            Pricing
          </SidebarLink>
          <SidebarLink  to="partner" onClick={toggle}>
            Partner With Us
          </SidebarLink>
          {
            currentUser ?
              null
            :
              <SidebarLink  to="signup" onClick={toggle}>
                Sign Up
              </SidebarLink>
          }
        </SidebarMenu>
        <SideBtnWrap>
          {
            currentUser ?
              <SidebarRoute  onClick={() => auth.signOut()}>
                Sign Out
              </SidebarRoute>
            :
              <SidebarRoute to="/signin" onClick={toggle}>
                Sign In
              </SidebarRoute>
          }
        </SideBtnWrap>
      </SidebarWrapper>
      
      
    </SidebarContainer>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Sidebar);
