import "./footer.scss";
import footerIcon from "../../assets/images/footerIcon.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as Group } from "../../assets/images/group.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as YouTube } from "../../assets/images/youTube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footerSection">
        <div className="container">
          <div className="footerSection__content">
            <div className="footerSection__info">
              <div className="footerSection-logo">
                <img src={footerIcon} alt="" />
              </div>
              <p className="footerSection__copyright">
                Copyright © 2024 CamClo3D. <br />
                All rights reserved
              </p>
            </div>
            <div className="footerSectionmenu">
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
            </div>
            <div className="footerSectionmenu">
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
              <Link className="footerSectionmenu__item">About us</Link>
            </div>
            <div className="footerContact">
              <div className="footerContact__box">
                <h5 className="footerContact__title">Contact Us</h5>
                <div>
                  <div className="footerContact__link">
                    <img src={phone} alt="#" />
                    <a href="#">+91 9399150791</a>
                  </div>
                  <div className="footerContact__link">
                    <img src={email} alt="#" />
                    <a href="#">techtelligenceindia@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="FooterContact__social">
                <h5 className="footerContact__socialtitle">Follow Us</h5>
                <div className="footerContact__socialLinks">
                  <div className="footerContact__socialLink">
                    <Instagram />
                  </div>
                  <div className="footerContact__socialLink">
                    <Group />
                  </div>
                  <div className="footerContact__socialLink">
                    <Twitter />
                  </div>
                  <div className="footerContact__socialLink">
                    <YouTube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
