import "./verifyNumber.scss";
import { ReactComponent as Close } from "../../assets/images/crossBtn.svg";
import DialogLogo from "../../assets/images/dialogLogo.svg";
const VerifyNumberModel = ({ setShowVerify }) => {
  const handleModalClose = () => {
    setShowVerify(false);
  };
  return (
    <>
      <div className="model">
        <div className="model__dialog">
          <div className="dialog__head">
            <h5 className="dialog__maintitle">Verify your mobile number</h5>
            <span className="dialog__closeBtn" onClick={handleModalClose}>
              <Close />
            </span>
          </div>
          <div className="dialog__logo">
            <img src={DialogLogo} alt="DialogLogo" />
          </div>
          <div className="model__body">
            <p className="model__message">
              To complete the process please enter the verification code we sent
              you on your mobile number
            </p>
            <div className="verifyInput">
              <p className="verifyInput__title">Verification Code</p>
              <div className="verifyInput__container">
                <input type="text" value="-" className="verifyInput__box" />
                <input type="text" value="-" className="verifyInput__box" />
                <input type="text" value="-" className="verifyInput__box" />
                <input type="text" value="-" className="verifyInput__box" />
                <input type="text" value="-" className="verifyInput__box" />
              </div>
            </div>
            <button className="button verifyBtn">Verify</button>
            <p className="model__qstn">
              Didn’t receive the code? <span>Resend</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyNumberModel;
