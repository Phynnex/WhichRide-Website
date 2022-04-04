import React from 'react';
import {
  SignUpContainer,
  Sub,
  SignUpHeading,
  SignUpText,
  InputDiv,
  Input,
  SubscribeBtn,
} from "./style";


const SignUp = () => {
  return (
    <SignUpContainer>
      <Sub>
        <SignUpHeading>Sign up to our beta form</SignUpHeading>
        <SignUpText>
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </SignUpText>
      </Sub>
      <InputDiv>
        <Input type="email" id="email" placeholder="Email" color="#fff"/>
        <SubscribeBtn shouldHover={true}>Subscribe</SubscribeBtn>
      </InputDiv>
    </SignUpContainer>
  );
}



export default SignUp;