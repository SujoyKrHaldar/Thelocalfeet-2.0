import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const GoBack = ({
  top,
  bottom,
  color,
  background,
  backgroundOnHover,
  colorOnHover,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="btn flex" onClick={() => router.back()}>
        <div className="icon">
          <IoChevronBackOutline />
        </div>
        <p>Back</p>
      </div>

      <style jsx>{`
        .btn {
          padding-left: 1.6rem;

          background: ${background};
          color: ${color};

          margin-top: ${top};
          margin-bottom: ${bottom};
        }

        .icon {
          padding: 0;
          font-size: 0.9rem;
          transform: translateX(-2px);
        }
        .btn:hover {
          background: ${backgroundOnHover};
          color: ${colorOnHover};
        }
        .btn:hover .icon {
          transform: translateX(-5px);
        }
        p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

GoBack.defaultProps = {
  top: 0,
  bottom: 0,
  background: "#ededed",
  backgroundOnHover: "#ededed",
  color: "#000",
  colorOnHover: "#000",
};

export default GoBack;
