"use client";

import { FaArrowLeft } from "react-icons/fa6";
import styles from "./SearchBar.module.css";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = ({ setSearch: clickHandler, slug }) => {
  const inputRef = useRef(null);
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (slug) setSearch(slug.replace("%20", " "));
    inputRef.current.focus();
  }, []);

  const submitter = (e) => {
    e.preventDefault();
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
      <button type="submit" onClick={submitter}>
        <img src="/search.png" alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
