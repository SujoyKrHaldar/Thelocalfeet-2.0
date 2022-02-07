import { VscClose } from "react-icons/vsc";

function Model({ selected, setSelected, caption }) {
  const handelClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };

  return (
    <>
      <div className="backdrop" onClick={handelClick}>
        <div className="preview">
          <div className="icon close" onClick={() => setSelected(null)}>
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
          background: #e4e4e4d9;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fade 0.5s ease;
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .preview {
          position: relative;
          display: block;
          max-width: 545px;
          border: 1rem solid #ffffff;
          object-fit: cover;
          margin: 60px auto;
          border-bottom: 0;
        }
        .close {
          position: absolute;
          width: 35px;
          height: 35px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          right: 5px;
          top: 5px;
          border-radius: 100%;
          z-index: 5;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .captions {
          padding: 1rem 2rem;
          text-align: center;
          background: white;
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
