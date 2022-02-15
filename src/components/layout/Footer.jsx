import Newsletter from "../design/form/Newsletter";
import Footer_content from "./helper/Footer_content";
import Moment from "react-moment";

const Footer = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <Newsletter />
          <Footer_content />
          <p>
            Copyright{" "}
            <span>
              <Moment format="YYYY">{new Date()}</Moment>
            </span>
            , thelocalfeet - All right reserved.
          </p>
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

        @media (max-width: 767px) {
          .section {
            padding: 0;
          }

          p {
            text-align: left;
            margin: 1rem 0 0 0;
            font-weight: 600;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
