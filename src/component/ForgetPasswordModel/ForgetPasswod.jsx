import { ReactComponent as Close } from "../../assets/images/crossBtn.svg";
import DialogLogo from "../../assets/images/dialogLogo.svg";
import "./forgetPassword.scss";
import { ReactComponent as MessageIcon } from "../../assets/images/messageIcon.svg";

const ForgetPasswod = ({ setForgetPassword }) => {
  const handleModelClose = () => {
    setForgetPassword(false);
  };
  return (
    <>
      <div className="model">
        <div className="model__dialog">
          <div className="dialog__head">
            <h5 className="dialog__maintitle">Verify your mobile number</h5>
            <span className="dialog__closeBtn" onClick={handleModelClose}>
              <Close />
            </span>
          </div>
          <div className="dialog__logo">
            <img src={DialogLogo} alt="DialogLogo" />
          </div>
          <div className="model__body">
            <p className="model__forgetPasswordMessage">
              Enter Your Email address and we will send you a link to reset your
              password
            </p>
            <form action="#" className="loginForm">
              <div className="formField forgetFormField">
                <label className="formField__label">Email Address</label>
                <div className="formField__box">
                  <MessageIcon className="formField__icon" />
                  <input
                    type="email"
                    placeholder="Enter your First Name"
                    className="formField__input"
                  />
                </div>
              </div>
            </form>
            <button className="button forgetPassword__btn">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswod;
