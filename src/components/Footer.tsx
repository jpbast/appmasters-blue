import React from "react";
import { ButtonContact, FooterContainer, FooterInfo, FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper $warning={true}>
      <FooterContainer>
        <FooterInfo>
          <h2>Not sure where to begin?</h2>
          <h4> No need to worry, we’ll help you make sense of it all.</h4>
        </FooterInfo>
        <ButtonContact>Contact Us</ButtonContact>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
