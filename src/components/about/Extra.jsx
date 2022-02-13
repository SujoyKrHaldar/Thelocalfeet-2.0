import PhotographyTemplate from "../design/template/PhotographyTemplate";
import Albums from "./components/Albums";
import Blogs from "./components/Blogs";

const Extra = ({ blog, album }) => {
  return (
    <>
      <Blogs data={blog} />
      <PhotographyTemplate
        img_url="/assets/about-gallery.jpg"
        caption_one="Padharo sa, each street has its own tales when u r in Rajasthan"
        caption_two="The pursuit of excellent culmination in crafting u would rather die for when u r specially at the Royal Jaisalmer Fort premises. The vibrancy n the use of colours in the handlooms would make u awestruck."
      />
      <Albums data={album} />

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Extra;
