import styled from "styled-components/macro";
import media from "../../media";


export const SignUpContainer = styled.div`
  background: #f2c94c;
  padding: 94px;
  ${media.mobile`
    padding:75px;
  `}
`;

export const Sub = styled.div`
  width: 500px;
  margin: 0 auto;
  ${media.mobile`
    width:100%;
    `}
`;
export const SignUpHeading = styled.p`
  font-family: "lora";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 114.5%;
  letter-spacing: -0.01em;
  color: #232c35;
  text-align: center;
  margin-bottom: 20px;
`;

export const SignUpText = styled.p`
  font-family: "lora";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 114.5%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #233533;
  margin-bottom: 50px;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  ${media.mobile`
    flex-direction: column;
  `}
`;
export const Input = styled.input`
  border: 2px solid #ffffff;
  box-sizing: border-box;
  background: #f2c94c;
  padding: 1rem 2.4rem;
  border-radius: 3px;
  color: #fff;
`;
export const SubscribeBtn = styled.button`
  font-family: "Brown";
  font-size: 16px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background: #2c3539;
  font-weight: 400;
  font-size: 18px;
  border: none;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 1rem 2.4rem;
  background: #2c3539;
  cursor: pointer;
  margin: 0rem 1rem;
  &:hover {
    background: ${(props) => (props.shouldHover ? "none" : "none")};
    border: ${(props) => (props.shouldHover ? "2px solid #000" : "none")};
    color: ${(props) => (props.shouldHover ? "#000" : "none")};
  }
  ${media.mobile`
    margin-top: 20px;
    display:flex;
    justify-content:center;
    padding: 1rem 6rem;

  `}
`;
