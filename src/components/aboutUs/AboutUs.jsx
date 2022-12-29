import styled from "styled-components";
import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import card3 from "../../img/card3.png";
import card4 from "../../img/card4.png";

const SectionContainer = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
  background-color: #dfe2e7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin-right: 300px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  color: rgba(34, 34, 34, 0.9);
  display: inline-block;
  vertical-align: top;
  position: relative;
  max-width: 370px;

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

const SectionInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgSection = styled.div`
  width: 66.6%;
  height: auto;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  object-fit: cover;

  &.card-1 {
    top: -280px;
    left: 200px;
    z-index: 0;
  }

  &.card-2 {
    top: -250px;
    left: 500px;
    z-index: 1;
  }

  &.card-3 {
    top: 50px;
    left: 270px;
    z-index: 3;
  }

  &.card-4 {
    z-index: 1;
    top: 90px;
    left: 520px;
  }
`;

const SideBar = styled.span`
  width: 550px;
  background-color: #5e3428;
  height: 3px;
  position: absolute;
  top: 50px;
  right: -22.5%;
  transform: rotate(90deg);
`;

const ButtomBar = styled.span`
  width: 450px;
  background-color: #5e3428;
  height: 3px;
  position: absolute;
  top: 420px;
  right: 22.5%;
`;

const TextSection = styled.div`
  width: 33.3%;
  height: auto;
`;

const PaperSection = styled.div`
  background: #d9d9d9;
  box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.25);
  padding: 35px 100px 35px 35px;
`;

const PaperText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgba(34, 34, 34, 0.9);
`;

const NotionText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: rgba(34, 34, 34, 0.7);
  margin-top: 25px;
  max-width: 365px;
`;

const AboutUs = () => {
  return (
    <SectionContainer>
      <SectionTitle>more about us </SectionTitle>
      <SectionInner>
        <ImgSection>
          <Img className="card-1" src={card1} alt="About Us card 1" />
          <Img className="card-2" src={card2} alt="About Us card 2" />
          <Img className="card-3" src={card3} alt="About Us card 3" />
          <Img className="card-4" src={card4} alt="About Us card 4" />
          <SideBar />
          <ButtomBar />
        </ImgSection>
        <TextSection>
          <PaperSection>
            <PaperText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              sollicitudin justo, sit amet consectetur leo. Sed eleifend
              vulputate tortor eget ornare. Duis ac massa rutrum leo feugiat
              consectetur. Sed ut condimentum augue, ac vulputate nunc.
              Pellentesque at pharetra massa. In facilisis pretium nunc eget
              aliquet. Phasellus feugiat blandit leo, maximus fringilla felis
              pulvinar suscipit. Maecenas imperdiet a leo a lacinia.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed mauris lacus, imperdiet id
              luctus et, finibus auctor justo. Cras aliquet justo nec erat
              sollicitudin, ac mollis nulla sollicitudin. Nullam ac augue in
              nibh semper tempor vel quis lorem.
            </PaperText>
          </PaperSection>
          <NotionText>
            Cras aliquet justo nec erat sollicitudin, ac mollis nulla
            sollicitudin. Nullam ac augue in nibh semper tempor vel quis lorem.
          </NotionText>
        </TextSection>
      </SectionInner>
    </SectionContainer>
  );
};

export default AboutUs;
