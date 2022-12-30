import BannerSection from "../bannerSection/BannerSection";
import HeaderSection from "../headerSection/HeaderSection";
import FooterSection from "../footerSection/FooterSection";
import ImgSection from "../imgSection/ImgSection";
import AboutUs from "../aboutUs/AboutUs";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { useEffect, useRef } from "react";

const App = () => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  gsap.utils.selector(el);
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);
  return (
    <div ref={el} id="smooth-wrapper">
      <div id="smooth-content">
        <HeaderSection />
        <BannerSection />
        <AboutUs />
        <ImgSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
