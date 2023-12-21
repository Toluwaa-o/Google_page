"use client";
import { useEffect, useState } from "react";
import SearchBar from "../../../components/Search/SearchBar";
import styles from "./SearchPage.module.css";
import { FiClock } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const SearchPage = ({ setSearch, slug }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("search_history") !== null) {
      setSearchHistory(JSON.parse(localStorage.getItem("search_history")));
    }
  }, [localStorage.getItem("search_history")]);

  useEffect(() => {
    if (searchHistory.length)
      localStorage.setItem("search_history", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const deleteSearch = (str) => {
    setSearchHistory((prev) => prev.filter((hist) => hist !== str));
    localStorage.setItem("search_history", JSON.stringify(searchHistory));
  };

  return (
    <main className={styles.searchpage}>
      <span>
        <SearchBar slug={slug} setSearch={setSearch} />
      </span>
      <span className={styles.previous_search}>
        {searchHistory.length
          ? searchHistory.map((hist) => {
              return (
                <span key={hist}>
                  <span>
                    <FiClock size={20} />
                  </span>
                  <Link href={`/search/${hist}`}>{hist}</Link>
                  <IoClose onClick={() => deleteSearch(hist)} size={25} fill="gray" />
                </span>
              );
            })
          : null}
      </span>
    </main>
  );
};

export default SearchPage;
