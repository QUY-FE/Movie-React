import PropTypes from "prop-types";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Moviecontext } from "../context/MovieProvider.jsx";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

function MovieList({ title, data }) {
  const { handleShowTrailer } = useContext(Moviecontext);

  return (
    <div className="text-white px-3 mb-10 ">
      <h2 className="uppercase text-xl font-bold my-5">{title}</h2>
      <Carousel
        responsive={responsive}
        itemClass="m-3"
        className="flex items-center"
      >
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              className="w-[200px] h-[300px] relative group"
              key={item.id}
              onClick={() => handleShowTrailer(item.id)}
            >
              <p className="uppercase text-sm font-bold my-2 w-full h-[20px] overflow-hidden">
                {item.title || item.original_title}
              </p>
              <div className="w-full h-full group-hover:scale-70 transition-transform duration-300 ease-in-out">
                <div className="absolute w-full h-full top-0 left-0 bg-black/10" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
