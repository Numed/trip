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
  padding-bottom: 100px;
`;

const SectionInner = styled.div`
  width: 80%;
`;

const TextSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  max-width: 485px;
  color: rgba(34, 34, 34, 0.9);
`;

const SectionSubtitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: rgba(34, 34, 34, 0.7);
  margin-bottom: 60px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  &.main-card {
    width: 500px;
    height: 650px;
    display: inline-block;
  }

  &.second-card {
    width: 320px;
    height: 420px;
  }
`;

const ImgInnerContainer = styled.div`
  width: 35%;
`;

const ImgBlock = styled.div`
  width: 300px;
  height: 200px;
  background-color: #d9d9d9;
  margin: 0 10px;
`;

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
        <ImgContainer>
          <Img className="main-card" src={card1} alt="Card1" />
          <ImgInnerContainer>
            <Img className="second-card" src={card2} alt="Card2" />
            <ImgBlock />
          </ImgInnerContainer>
        </ImgContainer>
      </SectionInner>
    </SectionContainer>
  );
};

export default ImgSection;
