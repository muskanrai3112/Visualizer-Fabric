import "./model.scss";
import { ReactComponent as Close } from "../../assets/images/crossBtn.svg";
import { ReactComponent as UserIcon } from "../../assets/images/userIcon.svg";
import DialogLogo from "../../assets/images/dialogLogo.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/eyeIcon.svg";
import googleIcon from "../../assets/images/socialDialog.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/insta.svg";
import { ReactComponent as MessageIcon } from "../../assets/images/messageIcon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/phoneIcon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/images/messageIcon.svg";
import { ReactComponent as OpenEyeIcon } from "../../assets/images/openEyeIcon.svg";

const SignUpModel = ({ setIsOpen, setShowVerify }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="model">
        <div className="model__dialog">
          <div className="dialog__head">
            <h5 className="dialog__maintitle">Sign Up</h5>
            <span className="dialog__closeBtn" onClick={handleModalClose}>
              <Close />
            </span>
          </div>
          <div className="dialog__logo">
            <img src={DialogLogo} alt="DialogLogo" />
          </div>
          <div className="model__body">
            <form action="#">
              <div className="formField">
                <label className="formField__label">First Name</label>
                <div className="formField__box">
                  <UserIcon className="formField__icon" />
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
              <div className="formField">
                <label className="formField__label">Last Name </label>
                <div className="formField__box">
                  <UserIcon className="formField__icon" />
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
              <div className="formField">
                <label className="formField__label">Email Address</label>
                <div className="formField__box">
                  <MessageIcon className="formField__icon" />
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
              <div className="formField">
                <label className="formField__label">Mobile Number</label>
                <div className="formField__box">
                  <PhoneIcon className="formField__icon" />
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
              <div className="formField">
                <label className="formField__label">Password</label>
                <div className="formField__box">
                  <PasswordIcon className="formField__icon" />
                  <input
                    type="password"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                  <EyeIcon className="formField__eyeIcon" />
                </div>
              </div>
              <div className="formField">
                <label className="formField__label">Confirm Password</label>
                <div className="formField__box">
                  <PasswordIcon className="formField__icon" />

                  <input
                    type="password"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                  <OpenEyeIcon className="formField__eyeIcon" />
                </div>
              </div>
            </form>
            <button
              className="button dialog__btn"
              onClick={() => {
                setShowVerify(true);
                setIsOpen(false);
              }}
            >
              sign up
            </button>
            <div className="dialogSocial">
              <p className="dialogSocial__text">
                <span>Or continue with</span>
              </p>

              <div className="dialogSocial__imgs">
                <img src={googleIcon} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
              </div>
              <p className="dialogSocial__link">
                Already have an account? <span> Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModel;
