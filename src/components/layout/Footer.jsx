import Newsletter from "../design/form/Newsletter";
import Footer_content from "./helper/Footer_content";

const Footer = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <Newsletter />
          <Footer_content />
          <p>Copyright 2021, thelocalfeet - All right reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .section {
          background: #0096885e;
          padding-bottom: 2rem;
          padding-top: 1rem;
          margin-top: auto;
        }
        p {
          text-align: center;
          margin: 3rem 0 0 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
