import React from "react";

import {
  MainContainer,
  WhyHeading,
  SubContainer1,
  SubContainer2,
  // Container1,
  // Container2,
  Container,
  // InnerContainer,
  // InnerContainer2,
} from "./style";
import MoreChoices1 from "../../assets/MoreChoices1.svg";
import MoreChoices from "../../assets/MoreChoices.svg";

const Why = () => {
  return (
    <>
      <MainContainer>
        <WhyHeading>Why Whichride</WhyHeading>
        <Container>
          <SubContainer1>
            <div>
              <div>
                <img src={MoreChoices1} alt="choice" />
              </div>
              <p>More choices</p>
              <p>
                WhichRide lets you compare pricing across the major rideshares
                so you can save money on every ride.
              </p>
            </div>
            <div>
              <img src={MoreChoices} alt="choice" />
              <p>More choices</p>
              <p>
                WhichRide lets you compare pricing across the major rideshares
                so you can save money on every ride.
              </p>
            </div>
          </SubContainer1>

          <SubContainer2>
            <div>
              <div>
                <img src={MoreChoices1} alt="choice" />
              </div>
              <p>More choices</p>
              <p>
                WhichRide lets you compare pricing across the major rideshares
                so you can save money on every ride.
              </p>
            </div>
            <div>
              <img src={MoreChoices1} alt="choice" />
              <p>More choices</p>
              <p>
                WhichRide lets you compare pricing across the major rideshares
                so you can save money on every ride.
              </p>
            </div>
          </SubContainer2>
        </Container>
      </MainContainer>
    </>
  );
};

export default Why;
