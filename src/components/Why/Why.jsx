import React from "react";

import {
  MainContainer,
  WhyHeading,
  SubContainer,
  SubContainer1,
  SubContainer2,
  Container,
  InnerContainer,
  WhyIcon,
  WhySubHeading,
  WhyPara,
  ChoiceBackground,
  ChoiceBackground2,
} from "./style";
import MoreChoices1 from "../../assets/MoreChoices1.svg";
import MoreChoices from "../../assets/MoreChoices.svg";
import Vector from "../../assets/Vector.svg";
import { AiOutlineSafety } from "react-icons/ai";

const Why = () => {
  return (
    <>
      <MainContainer>
        <WhyHeading>Why Whichride</WhyHeading>
        <Container>
          <SubContainer>
            <SubContainer1>
              <InnerContainer>
                <WhyIcon>
                  <img src={MoreChoices1} alt="choice" />
                </WhyIcon>
                <WhySubHeading>More choices</WhySubHeading>
                <WhyPara>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </WhyPara>
              </InnerContainer>
              <InnerContainer>
                <WhyIcon>
                  <img src={MoreChoices} alt="choice" />
                </WhyIcon>
                <WhySubHeading>More choices</WhySubHeading>
                <WhyPara>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </WhyPara>
              </InnerContainer>
            </SubContainer1>
            <SubContainer2>
              <InnerContainer>
                <WhyIcon>
                  <ChoiceBackground>
                    <div style={{ padding: "14px 16px" }}>
                      <img src={Vector} alt="choice" />
                    </div>
                  </ChoiceBackground>
                </WhyIcon>
                <WhySubHeading>More choices</WhySubHeading>
                <WhyPara>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </WhyPara>
              </InnerContainer>
              <InnerContainer>
                <WhyIcon>
                  <ChoiceBackground2>
                    <div style={{ padding: "12px" }}>
                      <AiOutlineSafety size="40" color="#fff" />
                    </div>
                  </ChoiceBackground2>
                </WhyIcon>
                <WhySubHeading>Safety first</WhySubHeading>
                <WhyPara>
                  WhichRide lets you compare pricing across the major rideshares
                  so you can save money on every ride.
                </WhyPara>
              </InnerContainer>
            </SubContainer2>
          </SubContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default Why;
