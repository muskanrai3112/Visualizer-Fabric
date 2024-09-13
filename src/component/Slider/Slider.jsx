import Slider from "react-slick";
import sliderImg from "../../assets/images/sliderImg.jpeg";
import "./slider.scss";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="heroSectionSlider">
      <div className="container">
        <Slider {...settings}>
          <div className="heroSlider">
            <div className="heroSlider__context">
              <h1 className="heroSlider__maintitle">
                Experience Fabric Magic{" "}
                <span className="purpleText">in Seconds</span>
              </h1>
              <p className="heroSlider__subtitle">
                Transform fabrics instantly with our mesmerizing techniques!
              </p>
              <button className="button">Visualize</button>
            </div>
            <div className="heroSlider__img">
              <img src={sliderImg} alt="#" />
            </div>
          </div>

          <div className="heroSlider">
            <div className="heroSlider__context">
              <h1 className="heroSlider__maintitle">
                Experience Fabric Magic{" "}
                <span className="purpleText">in Seconds</span>
              </h1>
              <p className="heroSlider__subtitle">
                Transform fabrics instantly with our mesmerizing techniques!
              </p>
              <button className="button">Visualize</button>
            </div>
            <div className="heroSlider__img">
              <img src={sliderImg} alt="#" />
            </div>
          </div>

          <div className="heroSlider">
            <div className="heroSlider__context">
              <h1 className="heroSlider__maintitle">
                Experience Fabric Magic{" "}
                <span className="purpleText">in Seconds</span>
              </h1>
              <p className="heroSlider__subtitle">
                Transform fabrics instantly with our mesmerizing techniques!
              </p>
              <button className="button">Visualize</button>
            </div>
            <div className="heroSlider__img">
              <img src={sliderImg} alt="#" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
