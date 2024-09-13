import "./pravicyPolicy.scss";
import { ReactComponent as HomeIcon } from "../../assets/images/HomeIcon.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";
import { ReactComponent as CheckImg } from "../../assets/images/check.svg";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";

const PravicyPolicy = () => {
  return (
    <>
      <section className="privacyPolicySection">
        <div className="bannerSection privacyPolicy">
          <div className="container">
            <h1 className="maintitle">Privacy Policy </h1>
            <div className="clickIcons">
              <div className="clickIcons__home">
                <HomeIcon />
                <span className="clickIcons__homeTitle">Home</span>
                <RightArrow />
              </div>
              <span className="clickIcons__about">
                <Link to={"/service"}>Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="policyQuerry">
        <div className="container">
          <h4 className="policyQuerry__title">What is Lorem Ipsum?</h4>
          <div className="policyQuerry__para">
            <h6 className="policyQuerry__paraTitle">
              Lorem Ipsum is simply dummy text
            </h6>
            <p className="policyQuerry__paraInfo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="policyQuerry__para">
            <h6 className="policyQuerry__paraTitle">
              Lorem Ipsum is simply dummy text
            </h6>
            <p className="policyQuerry__paraInfo">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              Many desktop
              <span className="boldText"> publishing packages</span> and web
              page editors now use Lorem Ipsum as their default model text, and
              a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </p>
          </div>

          <div className="policyQuerry__para">
            <h6 className="policyQuerry__paraTitle">
              Lorem Ipsum is simply dummy text
            </h6>
            <div className="parapoints">
              <div className="parapoints__Point1">
                <CheckImg />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="parapoints__Point2">
                <CheckImg />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="parapoints__Point3">
                <CheckImg />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="parapoints__Point4">
                <CheckImg />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <p className="policyQuerry__paraInfo">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here, making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for
              <span className="boldText">lorem ipsum</span> will uncover many
              web sites still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on purpose
              (injected humour and the like).
            </p>
          </div>
          <div className="policyQuerry__para">
            <h6 className="policyQuerry__paraTitle">
              Lorem Ipsum is simply dummy text
            </h6>
            <p className="policyQuerry__paraInfo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              like <span className="underlineText"> Aldus PageMaker </span>{" "}
              including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="policyQuerry__para">
            <h6 className="policyQuerry__paraTitle">
              Lorem Ipsum is simply dummy text
            </h6>
            <p className="policyQuerry__paraInfo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum.....
            </p>
            <p className="policyQuerry__paraInfo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <span className="underlineText"> publishing packages</span> when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic publishing packages, remaining
              essentially unchanged. It was popularised in the 1960s with the of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default PravicyPolicy;
