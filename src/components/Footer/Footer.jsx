import React from "react";
import styled from "styled-components";
import media from "../../media";


const FooterContainer = styled.div`
  background: #deb63d;
  display: flex;
  justify-content: space-between;
  padding: 24px 80px;
  color: #ffffff;
  ${media.mobile`
    flex-direction: column;
    margin-bottom: 20px;
    text-align:center;
  `}
`;

const Rights = styled.div`
  ${media.mobile`
    margin-bottom: 20px;
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Rights>© 2020 Whichride - All rights reserved.</Rights>
      <p> Privacy Policy Terms and Conditions</p>
    </FooterContainer>
  );
};

export default Footer;
