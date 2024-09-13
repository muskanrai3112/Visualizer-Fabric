import "./faqSection.scss";
import arrow from "../../assets/images/chooseUsArrow.svg";
import pluseIcon from "../../assets/images/plusIcon.png";
const FAQsection = () => {
  return (
    <>
      <section className="faqSection">
        <div className="container">
          <div className="faqSection__content">
            <h2 className="faqSection__title">
              Frequently Asked <span className="purpleText">Questions</span>
            </h2>
            <button className="button button--border">
              View all <img src={arrow} alt="#" />
            </button>
          </div>
          <div className="faqSection__questions">
            <div className="faqSectionQsn">
              <h6 className="faqSectionQsn__highLight">
                <span className="faqgray">01.</span> Question no -- 1
              </h6>
              <div className="faqSectionQsn__pluse">
                <img src={pluseIcon} alt="" />
              </div>
            </div>
            <div className="faqSectionQsn">
              <h6 className="faqSectionQsn__highLight">
                <span className="faqgray">01.</span> Question no -- 1
              </h6>
              <div className="faqSectionQsn__pluse">
                <img src={pluseIcon} alt="" />
              </div>
            </div>
            <div className="faqSectionQsn">
              <h6 className="faqSectionQsn__highLight">
                <span className="faqgray">01.</span> Question no -- 1
              </h6>
              <div className="faqSectionQsn__pluse">
                <img src={pluseIcon} alt="" />
              </div>
            </div>
            <div className="faqSectionQsn">
              <h6 className="faqSectionQsn__highLight">
                <span className="faqgray">01.</span> Question no -- 1
              </h6>
              <div className="faqSectionQsn__pluse">
                <img src={pluseIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQsection;
