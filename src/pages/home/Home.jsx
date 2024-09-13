import AboutUs from "../../component/AboutUs/AboutUs";
import ChooseUs from "../../component/ChooseUs/ChooseUs";
import FabricCheck from "../../component/FabricCheck/FabricCheck";
import FAQsection from "../../component/FAQsection/FAQsection";
import Footer from "../../component/footer/Footer";
import Services from "../../component/services/Services";
import SimpleSlider from "../../component/Slider/Slider";
import VisualFabric from "../../component/VisualFabric/VisualFabric";

const Home = () => {
  return (
    <>
      <SimpleSlider />
      <FabricCheck />
      <ChooseUs />
      <Services />
      <AboutUs />
      <FAQsection />
      <VisualFabric />
      <Footer />
    </>
  );
};

export default Home;
