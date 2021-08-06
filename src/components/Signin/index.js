import React from 'react'

import { auth} from '../../firebase/firebase.utils';

import Video from '../../assests/videos/video.mp4';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, HeroBg, Icon, ImgBg, Text } from './SigninElements';

class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: ''});
    } catch (error){
      console.log(error);
    }
     

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }

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
            
              <Form action='#' onSubmit={this.handleSubmit}>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} required />
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
