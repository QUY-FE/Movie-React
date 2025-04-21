import PropTypes from "prop-types";
import { Moviecontext } from "../context/MovieProvider.jsx";
import { useContext } from "react";

function MovieSearch({ title, data }) {
  const { handleShowTrailer } = useContext(Moviecontext);

  return (
    <div className="text-white px-3 mb-10 ">
      <h2 className="uppercase text-xl font-bold my-5">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleShowTrailer(item.id)}
            >
              <p className="uppercase text-sm font-bold my-2 w-full h-[20px] overflow-hidden">
                {item.title || item.original_title}
              </p>
              <div className="w-full h-full group-hover:scale-70 transition-transform duration-400 ease-in-out">
                <div className="absolute w-full h-full top-0 left-0 bg-black/10" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

MovieSearch.prosTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieSearch;
