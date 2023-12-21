"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../page.module.css";
import { IoClose } from "react-icons/io5";

const LinkSearchBar = ({ search: propSearch, setSearch: propsetSearch }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    setSearch(propSearch);
  }, []);

  const submitter = (e) => {
    e.preventDefault();
    if(!search) return

    if (search !== '') router.push(`/search/${search}`);
  };

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
        {search && <IoClose className={styles.clear_search} onClick={() => setSearch('')} size={35} fill="gray" />}
        <button type="submit" onClick={submitter}>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default LinkSearchBar;
