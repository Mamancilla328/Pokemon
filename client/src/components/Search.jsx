import "./Search.css";
import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { getPokemons, getNamePokemons } from "../Redux/Actions.js";
import { IoIosSearch } from "react-icons/io";

function Search() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(getNamePokemons(name));
    dispatch(getPokemons({ name: name }));
    setName("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleOnChange}
        value={name}
        className="Search"
      />
      <button type="submit" className="lupa">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default Search;
