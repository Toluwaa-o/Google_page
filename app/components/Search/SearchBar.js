"use client";

import { FaArrowLeft } from "react-icons/fa6";
import styles from "./SearchBar.module.css";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ setSearch: clickHandler, slug }) => {
  const inputRef = useRef(null);
  const router = useRouter();
  const [searchHistory, setSearchHistory] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (slug) setSearch(slug.replace(/%20/g, " "));
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("search_history") !== null) {
      const newArr = JSON.parse(localStorage.getItem("search_history"));
      setSearchHistory(newArr);
    }
  }, []);

  const submitter = (e) => {
    e.preventDefault();

    if (!search) return;

    const updatedSearchHistory = [...searchHistory, search];

    setSearchHistory(updatedSearchHistory);

    localStorage.setItem(
      "search_history",
      JSON.stringify(updatedSearchHistory)
    );

    clickHandler();
    if (search) router.push(`/search/${search}`);
  };

  return (
    <form className={styles.searchbar} onSubmit={submitter}>
      <FaArrowLeft size={20} onClick={clickHandler} />
      <input
        type="text"
        placeholder="Search..."
        aria-labelledby="search-field"
        name="search"
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <IoClose onClick={() => setSearch("")} size={35} fill="gray" />
      )}
      <button type="submit" onClick={submitter}>
        <img src="/search.png" alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
