import styled from "styled-components/macro";
import media from "../../media";

export const MainContainer = styled.div`
  background: linear-gradient(to left, #a792fe12 50%, #e5e5e5 50%);
  padding: 80px 40px;

  ${media.mobile`
      background: linear-gradient(to left, #a792fe12 50%, #e5e5e5 50%);

  `}

  ${media.mobile`
    background: #e5e5e5;
  `}
`;

export const WhyHeading = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 112.5%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #232c35;
  padding: 40px 0px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubContainer = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 80px;
  margin-bottom: 40px;
  ${media.mobile`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 0px;
    grid-gap: 0px;
  `}
    
  
`;

export const SubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  margin-bottom: 40px;
  
`;

export const WhyIcon = styled.div`
  margin-bottom: 20px;
  ${media.mobile`
    text-align:center;
  `}
`;
export const WhySubHeading = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 112.5%;
  letter-spacing: -0.01em;
  color: #232c35;
  margin-bottom: 20px;
  ${media.mobile`
    text-align:center;
  `}
`;

export const WhyPara = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #4f4f4f;
  ${media.mobile`
    text-align:center;
  `}
`;

export const ChoiceBackground = styled.div`
  width: 64px;
  height: 64px;
  background: #6fcf97;
  border-radius: 50%;
  margin: auto 0;
  ${media.mobile`
    margin 0 auto;
  `}
`;
export const ChoiceBackground2 = styled.div`
  width: 64px;
  height: 64px;
  background: #bb6bd9;
  border-radius: 50%;
  margin: auto 0;
  ${media.mobile`
    margin 0 auto;
  `}
`;