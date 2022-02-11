import { IoIosArrowUp } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function ScrollToTop() {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="buttons">
        <div className="flex scroll_top back" onClick={back}>
          <div className="icon">
            <IoChevronBackOutline />
          </div>
          <p>Back</p>
        </div>

        <div onClick={scroll} className="flex scroll_top">
          <div className="icon">
            <IoIosArrowUp />
          </div>
          <p>Go to top</p>
        </div>
      </div>

      <style jsx>{`
        .buttons {
          display: flex;
          align-items: center;
          justify-content: right;
          position: sticky;
          bottom: 2rem;
          z-index: 1;
        }

        p {
          margin: 0;
        }
        .back {
          display: none;
        }

        .flex {
          gap: 0.5rem;
        }

        .scroll_top {
          color: white;
          border-radius: 50px;
          cursor: pointer;
          padding: 0.3rem;
        }
        .scroll_top p {
          z-index: 1;
          margin-left: -4.5rem;
          opacity: 0;
        }
        .scroll_top:hover {
          background: #008175;
          padding: 0.3rem;
          padding-right: 1.5rem;
        }

        .scroll_top:hover p {
          margin-left: 0;
          opacity: 1;
        }

        .icon {
          background: #009688;
          color: white;
          font-size: 1.4rem;
          border-radius: 100%;
        }

        @media (max-width: 600px) {
          .buttons {
            justify-content: space-between;
          }

          .scroll_top p {
            z-index: 1;
            margin-left: 0;
            opacity: 1;
          }

          .scroll_top,
          .scroll_top:hover {
            background: #009688;
            padding: 1rem 2rem 1rem 1.5rem;
            gap: 0;
          }

          .icon {
            font-size: 0.9rem;
            padding: 5px;
          }

          .back {
            display: flex;
            background: black;
            color: white;
          }

          .back .icon {
            background: black;
          }
        }
      `}</style>
    </>
  );
}
