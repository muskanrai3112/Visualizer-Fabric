import bodyImg from "../../assets/images/fabricCheck.jpg";
import "./fabricCheck.scss";
const FabricCheck = () => {
  return (
    <section className="fabricCheck">
      <div className="container">
        <div className="fabricCheck__body">
          <div className="fabricCheck__img">
            <img src={bodyImg} alt="#" />
            <img className="overlapImg" src={bodyImg} alt="#" />
          </div>
          <div className="fabricCheck__context">
            <h2 className="fabricCheck__mainTitle">
              Instant Fabric Transformation at{" "}
              <span className="purpleText">Your Fingertips</span>
            </h2>
            <p className="fabricCheck__info">
              Revolutionize garment design with our advanced digital draping
              capabilities. Our innovative software allows you to effortlessly
              create, refine, and visualize fabric designs with precision.
              Whether youre designing sarees, kurtas, shirts, or other garments,
              our intuitive tools provide unparalleled flexibility and accuracy.
              Transform your fabric concepts into stunning, realistic
              representations in just a few clicks, empowering you to bring your
              vision to life with ease.
            </p>

            <button className="button">Visualize Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricCheck;
