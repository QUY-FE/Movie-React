import React, { useState } from "react";
import PropTypes from "prop-types";

function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputValue = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <div className="p-4 bg-zinc-800 flex items-center justify-between fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center space-x-4">
        <h1 className="text-[35px] uppercase font-bold text-red-700 mr-4">
          Movie
        </h1>
        <nav className="flex items-center space-x-4 ">
          <a href="#" className="text-white hover:underline p-3">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="px-6 py-2 text-black rounded-tl-[30px] rounded-bl-[30px] outline-none"
          onChange={handleInputValue}
        />
        <button
          className="px-4 py-2 text-while text-white bg-red-700 rounded-tr-[30px] rounded-br-[30px]  hover:bg-red-400 active:bg-red-600"
          onClick={() => onSearch(searchValue)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
