import cardIcon from "../../assets/images/chooseUsIcon.svg";
import "./chooseUs.scss";
import arrow from "../../assets/images/chooseUsArrow.svg";

const ChooseUs = () => {
  return (
    <>
      <section className="chooseUs">
        <div className="container">
          <div className="chooseUs__head">
            <h2 className="chooseUs__mainTitle">
              Why <span className="purpleText">Choose Us</span>
            </h2>
            <p className="chooseUs__subTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="chooseUs__cards">
            <div className="chooseCard">
              <div className="chooseCard__cardIcon">
                <img src={cardIcon} alt="" />
              </div>
              <h5 className="chooseCard__title">Productions Of Fabrics</h5>
              <p className="chooseCard__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                dicta in minima consequuntur eligendi tempora voluptatem
                deleniti eveniet ullam, quasi inventore fugiat omnis error quae,
                aliquam nam incidunt quisquam iusto!
              </p>
              <a href="#" className="viewMore">
                View More <img src={arrow} alt="#" />
              </a>
            </div>
            <div className="chooseCard">
              <div className="chooseCard__cardIcon">
                <img src={cardIcon} alt="" />
              </div>
              <h5 className="chooseCard__title">Productions Of Fabrics</h5>
              <p className="chooseCard__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                dicta in minima consequuntur eligendi tempora voluptatem
                deleniti eveniet ullam, quasi inventore fugiat omnis error quae,
                aliquam nam incidunt quisquam iusto!
              </p>
              <a href="#" className="viewMore">
                View More <img src={arrow} alt="#" />
              </a>
            </div>
            <div className="chooseCard">
              <div className="chooseCard__cardIcon">
                <img src={cardIcon} alt="" />
              </div>
              <h5 className="chooseCard__title">Productions Of Fabrics</h5>
              <p className="chooseCard__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                dicta in minima consequuntur eligendi tempora voluptatem
                deleniti eveniet ullam, quasi inventore fugiat omnis error quae,
                aliquam nam incidunt quisquam iusto!
              </p>
              <a href="#" className="viewMore">
                View More <img src={arrow} alt="#" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
