import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d0d0d0;
  padding: 60px 100px;
`;

const FooterTitle = styled.h3`
  font-weight: 500;
  font-size: 64px;
  line-height: 78px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(34, 34, 34, 0.7);
`;

const FooterSubtitle = styled.h2`
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #000000;
  margin-top: 10px;
`;

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterTitle>Your favorite destination</FooterTitle>
      <FooterSubtitle>By Vita Petroniuk</FooterSubtitle>
    </FooterContainer>
  );
};

export default FooterSection;
