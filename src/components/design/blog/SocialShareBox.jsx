import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";

import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share";

export default function SocialShareBox({ blog }) {
  const shareUrl = `${process.env.NEXT_PUBLIC_WEBSITE_LINK}/explore/${blog.slug}`;

  return (
    <div className="social">
      <h3 className="title">Share this Article</h3>
      <p>
        If you enjoyed reading this story, then we'd love it if you would{" "}
        <span>Share it!</span>
      </p>

      <div className="social_icon">
        <FacebookShareButton style={{ margin: "0.5rem" }} url={shareUrl}>
          <FacebookIcon
            iconFillColor="black"
            size={35}
            round={false}
            bgStyle={{ fill: "#dedede" }}
          ></FacebookIcon>
        </FacebookShareButton>

        <WhatsappShareButton style={{ margin: "0.5rem" }} url={shareUrl}>
          <WhatsappIcon
            iconFillColor="black"
            size={35}
            round={false}
            bgStyle={{ fill: "#dedede" }}
          ></WhatsappIcon>
        </WhatsappShareButton>

        <EmailShareButton style={{ margin: "0.5rem" }} url={shareUrl}>
          <EmailIcon
            iconFillColor="black"
            size={35}
            round={false}
            bgStyle={{ fill: "#dedede" }}
          ></EmailIcon>
        </EmailShareButton>
      </div>

      <style jsx>{`
        .social {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          padding: 3rem;
          background: #ebebeb;
          margin: 0 0 0.2rem;
          text-align: center;
        }
        .caption {
          font-size: 3rem;
          color: #dcdcdc;
          position: absolute;
          top: -55px;
          z-index: -1;
          transform: translateX(-50%);
          left: 51%;
        }
        .title {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        .social p span {
          font-weight: 800;
        }
        .social_icon {
          padding: 0.3rem 2rem;
        }

        @media only screen and (max-width: 600px) {
          .social {
            padding: 2rem;
          }
          .social_icon {
            padding: 0;
          }
        }
        @media only screen and (max-width: 450px) {
          .social p span {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
