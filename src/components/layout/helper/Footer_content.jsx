import Link from "next/link";

const data = [
  {
    name: "Blogs",
    url: "/explore#articles",
  },
  {
    name: "Gallery",
    url: "/photography/gallery",
  },
  {
    name: "Photo Blogs",
    url: "/photography/photo-blog",
  },
  {
    name: "Shop",
    url: "/store",
  },
];

const Footer_top = () => {
  return (
    <>
      <div className="main">
        <img
          className="logo"
          src="/logo_black.png"
          alt="thelocalfeet"
          onDragStart={(e) => {
            e.preventDefault();
          }}
        />

        <p className="description">
          You might not always fit in to experience the offbeat travel, but you
          must try. Follow thelocalfeet, conceptualized by Mayuri & Shubha in
          2018 To get more insight into sustainable travel.
        </p>

        <div className="social_link"></div>
      </div>

      <div className="links">
        <p className="title">Quick Links</p>

        <div className="flex">
          {data.map((d, i) => (
            <Link href={d.url} key={i}>
              <a>{d.name}</a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .main,
        .links {
          text-align: center;
          padding: 2rem;
        }
        .main {
          max-width: 539px;
          margin: auto;
        }

        .links {
          padding-top: 0;
        }

        .flex {
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .title {
          font-weight: 800;
          font-size: 1.2rem;
        }
        a {
          padding: 0.3rem 0;
        }
      `}</style>
    </>
  );
};

export default Footer_top;
