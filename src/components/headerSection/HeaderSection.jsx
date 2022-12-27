import styled from "styled-components";
import intro from "../../img/intro.png";

const Header = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${intro}) no-repeat center;
  background-size: cover;
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 35px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.ul`
  width: 33.3%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const IntroContainer = styled.div`
  margin-top: 120px;
  width: 50%;
  height: auto;
  background-color: #d9d9d9;
  padding-bottom: 50px;
`;

const IntroTextSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 20px 0px 100px;
`;

const IntroTitle = styled.h2`
  font-weight: 500;
  font-size: 64px;
  line-height: 78px;
  letter-spacing: 0.04em;
  color: rgba(34, 34, 34, 0.7);
`;

const IntroSubtitle = styled.h3`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.04em;
  color: rgba(34, 34, 34, 0.7);
`;

const IntroButton = styled.button`
  background: #adbab7;
  border-radius: 30px;
  border: none;
  margin-top: 20px;
  outline: none;
  padding: 10px 58px;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  margin: 40px 0px 0px 100px;
`;

const HeaderSection = () => {
  return (
    <Header>
      <NavContainer>
        <Nav>
          <NavLink href="#">HOME</NavLink>
          <NavLink href="#">about</NavLink>
          <NavLink href="#">contact us</NavLink>
        </Nav>
      </NavContainer>
      <IntroContainer>
        <IntroTextSection>
          <IntroTitle>Your next favorite destination</IntroTitle>
          <IntroSubtitle>get the best out of a trip to ocean</IntroSubtitle>
        </IntroTextSection>
        <IntroButton>Book a trip</IntroButton>
      </IntroContainer>
    </Header>
  );
};

export default HeaderSection;
