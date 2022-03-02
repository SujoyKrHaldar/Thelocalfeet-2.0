import { VscClose } from "react-icons/vsc";

function Model({ selected, setSelected, caption, open, close }) {
  // const handelClick = (e) => {
  //   if (e.target.classList.contains("backdrop")) {
  //     setSelected(null);
  //   }
  // };

  return (
    <>
      {/* <div className="backdrop" onClick={handelClick}> */}
      <div className={open ? "backdrop open" : "backdrop"}>
        <div className={open ? "preview open_box" : "preview"}>
          <div
            className="close"
            onClick={() => {
              setSelected(null);
              close;
            }}
          >
            <VscClose />
          </div>
          <img src={selected} alt="Enlarged picture" />
          <div className="captions">
            <p>{caption}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .backdrop {
          position: fixed;
          inset: 0;
          z-index: 5;
          padding: 2rem;
          width: 100%;
          height: 100%;
          background: #0000004f;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.15s ease;

          /* animation: fade 0.5s ease;
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          } */
        }
        .open {
          /*true -- open*/
          pointer-events: initial;
          opacity: 1;
        }

        .preview {
          position: relative;
          display: block;
          max-width: 545px;
          background: white;
          border: 1rem solid #ffffff;
          box-shadow: 0px 0px 20px 20px #0000002e;
          object-fit: cover;
          margin: 60px auto;
          border-bottom: 0;

          transition: 1s ease;
          transform: scale(0.95) translateY(0);
        }

        .open_box {
          /*true -- open*/
          transform: scale(1) translateY(0);
        }

        .close {
          position: absolute;
          width: 35px;
          height: 35px;
          font-size: 1.3rem;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          right: 5px;
          top: 5px;
          border-radius: 100%;
          z-index: 5;
          transition: 0.1s ease;
        }

        .close:active {
          transform: scale(0.9);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .captions {
          padding: 1rem 2rem;
          text-align: center;
        }
        p {
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default Model;
