import React from 'react'

import { signInWithGoogle } from '../../firebase/firebase.utils';

import Video from '../../assests/videos/video.mp4';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, HeroBg, Icon, ImgBg, Text } from './SigninElements'

class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  cons
  render(){
    return (
      <>
        <Container>
          <HeroBg>
            <ImgBg autoPlay loop muted src={ Video } type="video/mp4" />
          </HeroBg>
          <FormWrap>
            <Icon to='/'>Medery</Icon>
            <FormContent>
            
              <Form action='#'>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required />
                <FormButton type='submit'>Continue</FormButton>
                
                <Text>Forgot password</Text>
  
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    )
  }
 
}

export default SignIn;
