import { ReactComponent as HomeIcon } from "../../assets/images/HomeIcon.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";
import helpImg from "../../assets/images/faqHelpImg.png";
import pluseIcon from "../../assets/images/plusIcon.png";
import "./faq.scss";
import VisualFabric from "../../component/VisualFabric/VisualFabric";
import Footer from "../../component/footer/Footer";
const Faq = () => {
  return (
    <>
      <section className="bannerSection faqSection">
        <div className="container">
          <h1 className="maintitle">Faq</h1>
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
      {/* help section */}
      <section className="faqHelp">
        <div className="container">
          <div className="faqHelp__content">
            <div className="faqHelp__img">
              <img src={helpImg} alt="helpImg" />
            </div>
            <div className="questionsSection">
              <div className="faqHelp__generalQstnOne">
                <h4 className="faqHelp__title">
                  General <span className="purpleText">Queries</span>
                </h4>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
              </div>
              <div className="faqHelp__generalQstnTwo">
                <h4 className="faqHelp__title">
                  General <span className="purpleText">Queries</span>
                </h4>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
              </div>
              <div className="faqHelp__generalQstnThree">
                <h4 className="faqHelp__title">
                  Refund <span className="purpleText">related</span>
                </h4>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
              </div>
              <div className="faqHelp__generalQstnFour">
                <h4 className="faqHelp__title">
                  Software <span className="purpleText">related</span>
                </h4>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
                <div className="qestns">
                  <p className="qestns__singleQstn">
                    <span>01.</span> What is CamClo3D?
                  </p>
                  <img src={pluseIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisualFabric />
      <Footer />
    </>
  );
};

export default Faq;
