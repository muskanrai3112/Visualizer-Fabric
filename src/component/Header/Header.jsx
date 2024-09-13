import "./header.scss";
import logo from "../../assets/images/FabricLogo.svg";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import SignUpModel from "../SignUpModel/SignUpModel";
import LoginModel from "../LoginModel/LoginModel";
import VerifyNumberModel from "../VerifyNumber/VerifyNumberModel";
import ForgetPasswod from "../ForgetPasswordModel/ForgetPasswod";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

  const handleHeaderToggle = () => {
    setActive(!active);
    console.log("ghjfgdjhf");
  };

  const handleModel = () => {
    setIsOpen(true);
    console.log("dfhhdjk");
  };
  const handLoginModel = () => {
    setLoginOpen(true);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content ">
            <div className="header__icon">
              <a href="#">
                <img src={logo} />
              </a>
            </div>
            <div
              className={
                active
                  ? "header__menu header__toggle active"
                  : "header__menu header__toggle"
              }
            >
              <Link to={"/"} className="menu__point" href="#">
                Home
              </Link>
              <Link to={"/service"} className="menu__point" href="#">
                Services
              </Link>
              <Link to={"/aboutUs"} className="menu__point" href="#">
                About Us
              </Link>
              <Link to={"/contactUs"} className="menu__point" href="#">
                Contact Us
              </Link>
              <Link to={"/faq"} className="menu__point" href="#">
                FAQ
              </Link>
              <div className="headerBtnMobile">
                <button
                  className="button button__login"
                  onClick={handLoginModel}
                >
                  login
                </button>
                <button className="button" onClick={() => handleModel()}>
                  sign up
                </button>
              </div>
            </div>
            <div className="headerBtn">
              <button className="button" onClick={() => handleModel()}>
                sign up
              </button>
              <button className="button button__login" onClick={handLoginModel}>
                login
              </button>
            </div>
            <button className="bars ">
              <FaBars onClick={handleHeaderToggle} />
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <SignUpModel setIsOpen={setIsOpen} setShowVerify={setShowVerify} />
      )}
      {LoginOpen && (
        <LoginModel
          setLoginOpen={setLoginOpen}
          setForgetPassword={setForgetPassword}
        />
      )}
      {showVerify && <VerifyNumberModel setShowVerify={setShowVerify} />}

      {forgetPassword && (
        <ForgetPasswod setForgetPassword={setForgetPassword} />
      )}
      <Outlet />
    </>
  );
};

export default Header;
