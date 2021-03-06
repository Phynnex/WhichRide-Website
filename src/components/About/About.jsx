import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutHeader,
  AboutSubHeader,
  StepOne,
  StepTwo,
  StepThree,
  StepText,
  Steps,
  StepTextDiv,
  StepsContainer,
  StepsDiv,
  StepHeader,
  StepPara,
  StepBackground,
  Container,
  AboutImg,
} from "./style";
import Phone from "../../assets/Phone.svg";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutHeading>
            <AboutHeader>
              Whichride brings together multiple
              <br /> ride hailing providers and local taxi
              <br /> firms in one app
            </AboutHeader>
            <AboutSubHeader>
              Allowing riders to select the provider that offers the <br /> best
              price, service or travel time, then seamlessly
              <br /> book within the app
            </AboutSubHeader>
        </AboutHeading>
        <Container>
          <AboutImg>
            <img src={Phone} alt="phone" />
          </AboutImg>

          <StepsContainer>
            <Steps>
              <StepsDiv>
                <StepOne>
                  <StepBackground>
                    <StepText>Step 1</StepText>
                  </StepBackground>
                </StepOne>
                <StepTextDiv>
                  <StepHeader>Enter location</StepHeader>
                  <StepPara>
                    Enter your destination to see a list of taxi <br />{" "}
                    providers near you.
                  </StepPara>
                </StepTextDiv>
              </StepsDiv>
              <StepsDiv>
                <StepTwo>
                  <StepBackground>
                    <StepText>Step 2</StepText>
                  </StepBackground>
                </StepTwo>
                <StepTextDiv>
                  <StepHeader>Find the perfect ride</StepHeader>
                  <StepPara>
                    Filter results by driver rating, driver sex, waiting
                    <br />
                    times, price or speed. Reduce carbon footprint
                    <br />
                    by only showing hybrid or electric cars.
                  </StepPara>
                </StepTextDiv>
              </StepsDiv>
              <StepsDiv>
                <StepThree>
                  <StepBackground>
                    <StepText>Step 3</StepText>
                  </StepBackground>
                </StepThree>
                <StepTextDiv>
                  <StepHeader>Pay and Save</StepHeader>
                  <StepPara>
                    Once you select a ride, we search the web for
                    <br /> coupons to get you an even better deal, then <br />
                    book seemlessly within our app and earn
                    <br /> points while you ride.
                  </StepPara>
                </StepTextDiv>
              </StepsDiv>
            </Steps>
          </StepsContainer>
        </Container>
      </AboutContainer>
    </>
  );
};

export default About;
