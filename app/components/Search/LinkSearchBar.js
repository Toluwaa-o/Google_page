"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { IoClose } from "react-icons/io5";

const LinkSearchBar = ({ search: propSearch, setSearch: propsetSearch }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    setSearch(propSearch);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("search_history") !== null) {
      const newArr = JSON.parse(localStorage.getItem("search_history"));
      console.log(newArr);
      setSearchHistory(newArr);
    }
  }, []);

  const submitter = (e) => {
    e.preventDefault();
    if (!search) return;

    const updatedSearchHistory = [...searchHistory, search];

    setSearchHistory(updatedSearchHistory);

    localStorage.setItem("search_history", JSON.stringify(searchHistory));

    if (search !== "") router.push(`/search/${search}`);
  };

  useEffect(() => {
    if (propSearch) {
      if (
        localStorage.getItem("search_history") === null ||
        JSON.parse(localStorage.getItem("search_history")).indexOf(propSearch) <
          0
      ) {
        const newArr = JSON.parse(localStorage.getItem("search_history"));
        const updatedSearchHistory = [...newArr, propSearch];

        setSearchHistory(updatedSearchHistory);
        localStorage.setItem(
          "search_history",
          JSON.stringify(updatedSearchHistory)
        );
      }
    }
  }, [propSearch]);

  return (
    <div onClick={propsetSearch}>
      <form className={styles.searchbar} onSubmit={submitter}>
        <span>{propSearch ? propSearch : "Search..."}</span>
        <input
          type="text"
          name="Search"
          aria-labelledby="Search"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <IoClose
            className={styles.clear_search}
            onClick={() => setSearch("")}
            size={35}
            fill="gray"
          />
        )}
        <button type="submit" onClick={submitter}>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default LinkSearchBar;
