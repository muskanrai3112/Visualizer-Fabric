import "./contactus.scss";
import { ReactComponent as HomeIcon } from "../../assets/images/HomeIcon.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";
import contactLocation from "../../assets/images/contactLocation.png";
import contactUsLocationIcon from "../../assets/images/contactUsLocationIcon.png";
import contactmap from "../../assets/images/contactgoolemap.png";
import VisualFabric from "../../component/VisualFabric/VisualFabric";
import Footer from "../../component/footer/Footer";

const ContactUs = () => {
  return (
    <>
      <section className="bannerSection contactUs">
        <div className="container">
          <h1 className="maintitle">Contact Us</h1>
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

      {/* cards and map section */}
      <section className="contactLocation">
        <div className="container">
          <div className="contactLocation__titles">
            <h6 className="contactLocation__mainTitle">Contact Details</h6>
            <h2 className="contactLocation__subTitle">
              We Would Love To <span className="purpleText">Help You</span>
            </h2>
          </div>
          <div className="locationCard">
            <div className="locationCard__singleCardInfo">
              <div className="locationCard__icon">
                <img src={contactLocation} alt="" />
              </div>
              <div className="locationCard__visit">
                <h6 className="locationCard__title">Visit A Office</h6>
                <div className="locationCard__ContactImg">
                  <img src={contactUsLocationIcon} alt="" />
                </div>
              </div>
              <p className="locationCard__para">
                56/1/4 SK-1 Compound, Malviya Warehouse, Dewas Naka, Indore,
                Madhya Pradesh, India
              </p>
            </div>
            <div className="locationCard__singleCardInfo">
              <div className="locationCard__icon">
                <img src={contactLocation} alt="" />
              </div>
              <div className="locationCard__visit">
                <h6 className="locationCard__title">Visit A Office</h6>
                <div className="locationCard__ContactImg">
                  <img src={contactUsLocationIcon} alt="" />
                </div>
              </div>
              <p className="locationCard__para">
                56/1/4 SK-1 Compound, Malviya Warehouse, Dewas Naka, Indore,
                Madhya Pradesh, India
              </p>
            </div>
            <div className="locationCard__singleCardInfo">
              <div className="locationCard__icon">
                <img src={contactLocation} alt="" />
              </div>
              <div className="locationCard__visit">
                <h6 className="locationCard__title">Visit A Office</h6>
                <div className="locationCard__ContactImg">
                  <img src={contactUsLocationIcon} alt="" />
                </div>
              </div>
              <p className="locationCard__para">
                56/1/4 SK-1 Compound, Malviya Warehouse, Dewas Naka, Indore,
                Madhya Pradesh, India
              </p>
            </div>
          </div>
          <div className="locationCard__contactMap">
            <img src={contactmap} alt="contactmap" />
          </div>
        </div>
      </section>
      <VisualFabric />
      <Footer />
    </>
  );
};

export default ContactUs;
