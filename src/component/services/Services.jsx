import "./Services.scss";
import peopleIcon from "../../assets/images/peoplePurpleIcon.png";
import arrow from "../../assets/images/chooseUsArrow.svg";

const Services = () => {
  return (
    <>
      <section className="service">
        <div className="container">
          <div className="service__titles">
            <h2 className="service__mainTitle">
              Our <span className="purpleText"> Services</span>
            </h2>
            <p className="service__subTitle">
              Seamlessly drape garments digitally
            </p>
          </div>
          <div className="service__cards">
            <div className="serviceCard">
              <div className="serviceCard__img">
                <img src={peopleIcon} alt="image" />
              </div>
              <div className="serviceCard__content">
                <h4 className="serviceCard__title">Free</h4>

                <p className="serviceCard__para">
                  10 free credits to generate images. Each credit is worth 1
                  image and the images will be generated with a watermark.
                </p>

                <a href="#" className="viewMore service__viewBtn ">
                  View More <img src={arrow} alt="#" />
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceCard__img">
                <img src={peopleIcon} alt="image" />
              </div>
              <div className="serviceCard__content">
                <h4 className="serviceCard__title">Free</h4>

                <p className="serviceCard__para">
                  10 free credits to generate images. Each credit is worth 1
                  image and the images will be generated with a watermark.
                </p>

                <a href="#" className="viewMore service__viewBtn ">
                  View More <img src={arrow} alt="#" />
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceCard__img">
                <img src={peopleIcon} alt="image" />
              </div>
              <div className="serviceCard__content">
                <h4 className="serviceCard__title">Free</h4>

                <p className="serviceCard__para">
                  10 free credits to generate images. Each credit is worth 1
                  image and the images will be generated with a watermark.
                </p>

                <a href="#" className="viewMore service__viewBtn ">
                  View More <img src={arrow} alt="#" />
                </a>
              </div>
            </div>
            <div className="serviceCard">
              <div className="serviceCard__img">
                <img src={peopleIcon} alt="image" />
              </div>
              <div className="serviceCard__content">
                <h4 className="serviceCard__title">Free</h4>

                <p className="serviceCard__para">
                  10 free credits to generate images. Each credit is worth 1
                  image and the images will be generated with a watermark.
                </p>

                <a href="#" className="viewMore service__viewBtn ">
                  View More <img src={arrow} alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
