"use client";

import { FaArrowLeft } from "react-icons/fa6";
import styles from "./SearchBar.module.css";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ setSearch: clickHandler, slug }) => {
  const inputRef = useRef(null);
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (slug) setSearch(slug.replace("%20", " "));
    inputRef.current.focus();
  }, []);

  let search_history = [];

  useEffect(() => {
    if (localStorage.getItem("search_history") !== null) {
      search_history = JSON.parse(localStorage.getItem("search_history"));
    }
  }, []);

  const submitter = (e) => {
    e.preventDefault();
    if (!search) return;
    clickHandler();

    search_history.push(search);

    localStorage.setItem("search_history", JSON.stringify(search_history));
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
