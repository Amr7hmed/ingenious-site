import AboutSection from "../components/AboutSection";
import ProfessionalExp from "../components/ProfessionalExp";
import HeaderPage from "./../components/HeaderPage";
import VisionMission from "./../components/VisionMission";
import { ScrollToTop } from "./../components/ScrollToTop";
function About() {
  ScrollToTop();
  return (
    <>
      <HeaderPage bgImg="./assets/images/bg/about-bg.png" />
      <AboutSection />
      <VisionMission />
      <ProfessionalExp />
    </>
  );
}

export default About;
