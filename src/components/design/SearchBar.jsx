import { BiSearch } from "react-icons/bi";

export default function SearchBar({ text, search }) {
  return (
    <>
      <div className="flex search">
        <input placeholder={text} type="text" onChange={search} />
        <div className="icon">
          <BiSearch />
        </div>
      </div>

      <style jsx>{`
        .search {
          border: 2px solid #d5d5d5;
          border-radius: 20px;
          overflow: hidden;
          gap: 0.5rem;
          flex: 1;
          max-width: 350px;
        }
        input {
          width: 100%;
          outline: none;
          border: none;
          padding: 0.6rem 1rem;
        }

        .icon {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          color: #afafaf;
        }

        @media (max-width: 600px) {
          .search {
            width: 100%;

            border-radius: 50px;
          }

          input {
            padding: 1.3rem 2rem;
          }
        }
      `}</style>
    </>
  );
}
