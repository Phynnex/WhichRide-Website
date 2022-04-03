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
        <InputDiv>
          <Input type="email" id="email" placeholder="Email" />
          <SubscribeBtn>Subscribe</SubscribeBtn>
        </InputDiv>
      </Sub>
    </SignUpContainer>
  );
}



export default SignUp;