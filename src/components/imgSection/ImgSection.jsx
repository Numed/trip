import styled from "styled-components";
import card1 from "../../img/footer-card1.png";
import card2 from "../../img/footer-card2.png";

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dfe2e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionInner = styled.div`
  width: 66.6%;
`;

const TextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: rgba(34, 34, 34, 0.9);
`;

const SectionSubtitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: rgba(34, 34, 34, 0.7);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgBlock = styled.div``;

const ImgSection = () => {
  return (
    <SectionContainer>
      <SectionInner>
        <TextSection>
          <SectionTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SectionTitle>
          <SectionSubtitle>
            Nullam ac augue in nibh semper tempor vel quis lorem.
          </SectionSubtitle>
        </TextSection>
        <ImgSection>
          <Img src={card1} alt="" />
          <Img src={card2} alt="" />
          <ImgBlock />
        </ImgSection>
      </SectionInner>
    </SectionContainer>
  );
};

export default ImgSection;
