import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: #deb63d;
  display: flex;
  justify-content: space-between;
  padding: 24px 80px;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2020 Whichride - All rights reserved.</p>
      <p> Privacy Policy Terms and Conditions</p>
    </FooterContainer>
  );
};

export default Footer;
