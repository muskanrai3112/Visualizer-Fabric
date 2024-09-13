import Footer from "../../component/footer/Footer";
import { ReactComponent as HomeIcon } from "../../assets/images/HomeIcon.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";
import "./aboutUs.scss";
import VisualFabric from "../../component/VisualFabric/VisualFabric";

const AboutUS = () => {
  return (
    <>
      {/* banner */}
      <section className="bannerSection">
        <div className="container">
          <h1 className="maintitle">About Us</h1>
          <div className="clickIcons">
            <div className="clickIcons__home">
              <HomeIcon />
              <span className="clickIcons__homeTitle">Home</span>
              <RightArrow />
            </div>
            <span className="clickIcons__about">About Us</span>
          </div>
        </div>
      </section>
      {/* aboutSection Story */}
      <section className="behindStory">
        <div className="container">
          <h2 className="behindStory__title">
            The story behind <br />
            <span className="purpleText">CamClo3D</span>
          </h2>
          <p className="behindStory__para">
            We are a team of enthusiastic and passionate professionals from a
            textile background. Camclo3D has been built on a foundation of years
            of working in the textile-com industry. Running an e-commerce
            business has become excessively competitive in the past few years
            with the influx of new businesses everyday. Photoshoots are one of
            the most expensive features in running an online business, making it
            inaccessible for MSMEs, in turn reducing their rate of success.
          </p>
          <p className="behindStory__para">
            Camclo3D is an attempt to streamline the photography process and
            make it economical even for MSMEs. With our digital draping
            technology, you can now successfully visualize basic flat lays of
            fabrics into shirts, kurtis, sarees, kurtas etc.
          </p>
          <p className="behindStory__para">
            Our aim is to make e-commerce business easier and more successful
            for every individual.
          </p>
        </div>
      </section>
      <VisualFabric />
      <Footer />
    </>
  );
};

export default AboutUS;
