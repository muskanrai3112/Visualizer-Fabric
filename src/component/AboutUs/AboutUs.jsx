import aboutImg from "../../assets/images/aboutImg.png";
import "./aboutUs.scss";
const AboutUs = () => {
  return (
    <>
      <section className="aboutUs">
        <div className="container">
          <div className="aboutUs__content">
            <div className="aboutUs__img">
              <img src={aboutImg} alt="#" />
            </div>
            <div className="aboutUs__info">
              <h2 className="aboutUs__title">
                About <span className="purpleText">Us</span>
              </h2>
              <p>
                We are a team of enthusiastic and passionate professionals from
                a textile background. Camclo3D has been built on a foundation of
                years of working in the textile-com industry. Running an
                e-commerce business has become excessively competitive in the
                past few years with the influx of new usinesses everyday.
                Photoshoots are one of the most expensive features in running an
                online business, making it inaccessible for MSMEs, in turn
                reducing their rate of success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
