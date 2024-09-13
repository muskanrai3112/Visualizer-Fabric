import { ReactComponent as Close } from "../../assets/images/crossBtn.svg";
import { ReactComponent as UserIcon } from "../../assets/images/userIcon.svg";
import DialogLogo from "../../assets/images/dialogLogo.svg";
import googleIcon from "../../assets/images/socialDialog.svg";
import { ReactComponent as MessageIcon } from "../../assets/images/messageIcon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/images/messageIcon.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/insta.svg";
import "./loginModel.scss";

const LoginModel = ({ setLoginOpen, setForgetPassword }) => {
  const handleModalClose = () => {
    setLoginOpen(false);
  };
  const handelOpenForgetModel = () => {
    setForgetPassword(true);
    setLoginOpen(false);
  };
  return (
    <>
      <div className="model">
        <div className="model__dialog">
          <div className="dialog__head">
            <h5 className="dialog__maintitle">Login</h5>
            <span className="dialog__closeBtn" onClick={handleModalClose}>
              <Close />
            </span>
          </div>
          <div className="dialog__logo">
            <img src={DialogLogo} alt="DialogLogo" />
          </div>
          <div className="model__body">
            <form action="#" className="loginForm">
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
            </form>
            <button className="button dialog__btn">Login</button>
            <p className="forgetPassword" onClick={handelOpenForgetModel}>
              Forgot Password
            </p>
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

export default LoginModel;
