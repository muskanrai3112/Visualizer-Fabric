import "./service.scss";
import { ReactComponent as HomeIcon } from "../../assets/images/HomeIcon.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";
import { ReactComponent as CheckImg } from "../../assets/images/check.svg";
import { ReactComponent as CustomeFace } from "../../assets/images/CustomeFace.svg";
import { ReactComponent as PasswordIcon } from "../../assets/images/messageIcon.svg";

import getinTouch from "../../assets/images/inTouchImg.png";
import VisualFabric from "../../component/VisualFabric/VisualFabric";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className="bannerSection ourService">
        <div className="container">
          <h1 className="maintitle">Our Services</h1>
          <div className="clickIcons">
            <div className="clickIcons__home">
              <HomeIcon />
              <span className="clickIcons__homeTitle">Home</span>
              <RightArrow />
            </div>
            <span className="clickIcons__about">
              <Link to="/pravicyPolicy">Our Services</Link>
            </span>
          </div>
        </div>
      </div>
      {/* Ourservice card  */}
      <div className="serviceCards"></div>
      <div className="container">
        <h2 className="serviceCards__maintitle">
          Take a Look Into <span className="purpleText">Our Services</span>
        </h2>
      </div>
      {/* cards */}
      <div className="singleCard">
        <div className="container">
          <div className="singleCard__cards">
            <div className="individualCard">
              <div className="individualCard__cardInfo">
                <h4 className="individualCard__title">Free</h4>
                <div className="individualCard__content">
                  <p className="individualCard__contentParaOne">
                    In the bronze plan you get access to:
                  </p>
                  <p className="individualCard__contentParaTwo">
                    <span>Rs.0</span> /10 credits
                  </p>
                  <p className="individualCard__contentParaTwoPart">
                    (Price per image - Rs.0)
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    CamClo3D software to digitally drape your garments online
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    100+ templates for draping sarees and visualizing kurtas,
                    kurtis, shirts etc. from fabric images
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    10 free credits to generate images. Each credit is worth 1
                    image and the images will be generated with a watermark.{" "}
                  </p>
                </div>
              </div>
              <div className="individualCard__btn">
                <button className="button">Purchase Credits</button>
              </div>
            </div>
            <div className="individualCard">
              <div className="individualCard__cardInfo">
                <h4 className="individualCard__title">Free</h4>
                <div className="individualCard__content">
                  <p className="individualCard__contentParaOne">
                    In the bronze plan you get access to:
                  </p>
                  <p className="individualCard__contentParaTwo">
                    <span>Rs.0</span> /10 credits
                  </p>
                  <p className="individualCard__contentParaTwoPart">
                    (Price per image - Rs.0)
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    CamClo3D software to digitally drape your garments online
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    100+ templates for draping sarees and visualizing kurtas,
                    kurtis, shirts etc. from fabric images
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    10 free credits to generate images. Each credit is worth 1
                    image and the images will be generated with a watermark.{" "}
                  </p>
                </div>
              </div>
              <div className="individualCard__btn">
                <button className="button">Purchase Credits</button>
              </div>
            </div>
            <div className="individualCard">
              <div className="individualCard__cardInfo">
                <h4 className="individualCard__title">Free</h4>
                <div className="individualCard__content">
                  <p className="individualCard__contentParaOne">
                    In the bronze plan you get access to:
                  </p>
                  <p className="individualCard__contentParaTwo">
                    <span>Rs.0</span> /10 credits
                  </p>
                  <p className="individualCard__contentParaTwoPart">
                    (Price per image - Rs.0)
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    CamClo3D software to digitally drape your garments online
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    100+ templates for draping sarees and visualizing kurtas,
                    kurtis, shirts etc. from fabric images
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    10 free credits to generate images. Each credit is worth 1
                    image and the images will be generated with a watermark.{" "}
                  </p>
                </div>
              </div>
              <div className="individualCard__btn">
                <button className="button">Purchase Credits</button>
              </div>
            </div>
            <div className="individualCard">
              <div className="individualCard__cardInfo">
                <h4 className="individualCard__title">Free</h4>
                <div className="individualCard__content">
                  <p className="individualCard__contentParaOne">
                    In the bronze plan you get access to:
                  </p>
                  <p className="individualCard__contentParaTwo">
                    <span>Rs.0</span> /10 credits
                  </p>
                  <p className="individualCard__contentParaTwoPart">
                    (Price per image - Rs.0)
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    CamClo3D software to digitally drape your garments online
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    100+ templates for draping sarees and visualizing kurtas,
                    kurtis, shirts etc. from fabric images
                  </p>
                </div>
                <div className="individualCard__points">
                  <div className="individualCard__pointsImg">
                    <CheckImg />
                  </div>
                  <p>
                    10 free credits to generate images. Each credit is worth 1
                    image and the images will be generated with a watermark.{" "}
                  </p>
                </div>
              </div>
              <div className="individualCard__btn">
                <button className="button">Purchase Credits</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* custome face */}
      <section className="customeFace">
        <div className="container">
          <div className="customeFace__content">
            <div className="customeFace__image">
              <CustomeFace />
            </div>
            <div className="aboutCustomeFace">
              <h2 className="aboutCustomeFace__title">
                Add on <span className="purpleText">Services</span>
              </h2>
              <div className="aboutCustomeFace__paraMen">
                <h6 className="aboutCustomeFace__paraTitle">
                  Men custom face{" "}
                </h6>
                <p>
                  You can get a unique (male) model for your brand, which will
                  not be used by any other clients. Please do keep in mind that
                  only the face of the model changes, the pose remains the same
                </p>
              </div>
              <div className="aboutCustomeFace__paraWomen">
                <h6 className="aboutCustomeFace__paraTitle">
                  Women custom face
                </h6>
                <p>
                  You can get a unique (female) model for your brand, which will
                  not be used by any other clients. Please do keep in mind that
                  only the face of the model changes, the pose remains the same
                </p>
              </div>
              <div className="aboutCustomeFace__note">
                <span> Note:</span> All purchases made are final.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="getInTouch">
        <div className="container">
          <div className="getInTouch__titles">
            <h2 className="getInTouch__mainTitle">
              Get in <span className="purpleText">touch</span>
            </h2>
            <p className="getInTouch__subTitle">
              Get in touch for your special requirements and we can customize a
              plan for you.
            </p>
          </div>
          <div className="formContent">
            <div className="formContent__form">
              <div className="formField formContent__input">
                <label className="formField__label">Password</label>
                <div className="formField__box">
                  <PasswordIcon className="formField__icon" />
                  <input
                    type="password"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
              <div className="formField formContent__input">
                <label className="formField__label">Password</label>
                <div className="formField__box">
                  <PasswordIcon className="formField__icon" />
                  <input
                    type="password"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
              <div className="formField formContent__input">
                <label className="formField__label">message</label>
                <div className="formContent__messageBox">
                  <textarea
                    placeholder="Enter your message"
                    rows="8"
                  ></textarea>
                </div>
              </div>
              <button className="button getInTouch__btn">submit</button>
            </div>
            <div className="formContent__img">
              <img src={getinTouch} alt="getintouch" />
            </div>
          </div>
        </div>
      </section>
      <VisualFabric />
      <Footer />
    </>
  );
};

export default Service;
