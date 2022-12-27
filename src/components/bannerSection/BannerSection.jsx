import styled from "styled-components";
import about from "../../img/about-card.png";

const BannerContainer = styled.div`
  background: #dfe2e7;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerInner = styled.div`
  background: #d9d9d9;
  box-shadow: -4px 4px 50px rgba(0, 0, 0, 0.3);
  border-radius: 60px;
  width: 66.6%;
  height: 100%;
  transform: translate(0px, -45px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerText = styled.div`
  width: 56%;
  padding: 30px 0 30px 30px;
`;

const SectionTitle = styled.h3`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 35px;
  line-height: 44px;
  color: rgba(34, 34, 34, 0.9);
  display: inline-block;
  vertical-align: top;
  position: relative;

  &::after {
    content: "";
    width: 175px;
    height: 3px;
    background-color: #5e3428;
    vertical-align: middle;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
`;

const InfoSection = styled.div`
  margin: 60px 0;
  width: 100%;
  height: 100%;
`;

const InfoTitle = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(34, 34, 34, 0.9);
`;

const InfoText = styled.h5`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(34, 34, 34, 0.9);
`;

const InfoLabel = styled.label`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  color: rgba(34, 34, 34, 0.9);
`;

const InfoButton = styled.button`
  background: #d0d0d0;
  border-radius: 30px;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: #000000;
  padding: 10px 50px;
`;

const BannerImg = styled.div`
  width: 45%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background: url(${about}) no-repeat center;
  object-fit: cover;
  border-radius: 0px 60px 60px 0px;
`;

const BannerSection = () => {
  return (
    <BannerContainer>
      <BannerInner>
        <BannerText>
          <SectionTitle>where you can to stay?</SectionTitle>
          <InfoSection>
            <InfoTitle>Hotels, Resorts & Villas</InfoTitle>
            <InfoText>Hotels, Resorts & Villas</InfoText>
            <InfoText>Luxury Hotels & Resorts</InfoText>
          </InfoSection>
          <InfoSection>
            <InfoTitle>Holiday Rentals & Private Villas</InfoTitle>
            <InfoText>DEDICATED VILLAS</InfoText>
            <InfoText>Luxury Villas & Estates</InfoText>
          </InfoSection>
          <InfoSection>
            <InfoLabel>BOOK DIRECTLY & BEST PRICES</InfoLabel>
          </InfoSection>
          <InfoButton>reservation</InfoButton>
        </BannerText>
        <BannerImg>
          <Img src={about} alt="Banner Img"></Img>
        </BannerImg>
      </BannerInner>
    </BannerContainer>
  );
};

export default BannerSection;
