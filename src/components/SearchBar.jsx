import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({
    search,
    setSearch, 
    handleSubmit
}) => {
  return (
    <form 
    onSubmit={handleSubmit}
    className='py-2 px-2 rounded-4 position-relative'
    style={{
        backgroundColor:"lightgray",
    }}
    >
     <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter any word to Search"
        style={{
          width: "90%",
          padding: "7px 20px 9px",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      />   
      <BiSearch
        onClick={handleSubmit}
        style={{
          position: "absolute",
          top: "50%",
          right: "30px",
          transform: "translate(0, -50%)",
          fontSize: "40px",
          color: "#8000808a",
          cursor: "pointer",
          padding: "10px",
        }}
      />
    </form>
  );
};

export default SearchBar;