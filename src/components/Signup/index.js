import React from 'react'
import Video from '../../assests/videos/video.mp4';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, HeroBg, Icon, ImgBg, Text } from './SignupElements';

const SignUp = () => {
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
              <FormH1>Sign up</FormH1>
              <FormLabel htmlFor='for'>Name of Company</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Address</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Specialization</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormLabel htmlFor='for'>Comfirm Password</FormLabel>
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

export default SignUp;
