import styled from "styled-components/macro";
import media from "../../media";


export const AboutContainer = styled.div`
  background: #5c1a8d;
  margin-top: -58px;
  ${media.mobile`
    margin-top: -58px;
  `}
`;

export const AboutHeading = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  padding 90px 0 60px;
  ${media.mobile`
     padding 60px 0px 0px;

  `}
  
`;

export const AboutHeader = styled.p`
  text-align: center;
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 112.5%;
  letter-spacing: -0.01em;
  color: #ffffff;
  ${media.mobile`
   font-size: 28px;
  `}
`;

export const AboutSubHeader = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 114.5%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #e0e0e0;
  margin-top: 32px;
  ${media.mobile`
   font-size: 16px;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  ${media.mobile`
    flex-direction: column;
  `}
`;

export const AboutImg = styled.div`
  ${media.mobile`
    display: flex;
    justify-content: center;
  `}
`;
export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile`
    margin: 0rem 2rem;
  `}
`;

export const StepsDiv = styled.div`
  width: 420px;
  display: grid;
  grid-template-columns: 100px 400px ;
  grid-gap: 10px;
  margin-bottom: 45px;
`;
export const StepOne = styled.div`
  width: 59px;
  height: 59px;
  background: #f2c94c;
  border-radius: 50%;
  margin: auto 0;
`;

export const StepTwo = styled.div`
  width: 59px;
  height: 59px;
  background: #f2f2f2;
  border-radius: 50%;
  margin: auto 0;
`;

export const StepThree = styled.div`
  width: 59px;
  height: 59px;
  background: #f2f2f2;
  border-radius: 50%;
  margin: auto 0;
`;

export const StepBackground = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 114.5%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
`;

export const StepText = styled.p`
  padding-top: 20px;
`

export const StepTextDiv = styled.div`
  display:flex;
  flex-direction:column;
  color:#fff;
`
export const StepHeader = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 112.5%;
  color: #ffffff;
  margin-bottom: 15px;
`;

export const StepPara = styled.p`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 17.3px;
  line-height: 114.5%;
  letter-spacing: -0.01em;
  color: #f7f7f7;
`;
