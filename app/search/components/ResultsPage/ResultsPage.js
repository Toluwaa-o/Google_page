"use client";

import styles from "./ResultsPage.module.css";
import Link from "next/link";
import LinkSearchBar from "@/app/components/Search/LinkSearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Pagination from "../Pagination/Pagination";
import SearchPage from "../Page/SearchPage";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const ResultsPage = ({ data, num, slug }) => {
  const [search, setSearch] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (slug) setSearchWord(slug.replace("%20", " "));
  }, []);

  const submitter = (e) => {
    e.preventDefault();
    if (searchWord) router.push(`/search/${searchWord}`);
  };

  return (
    <>
      <header className={styles.header}>

        <Link href="/">
          <img src="/google_icon.png" alt="logo" />
        </Link>

        <form className={styles.searchbar} onSubmit={submitter}>
          <input
            type="text"
            name="Search"
            aria-labelledby="Search"
            placeholder="Search...."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {searchWord && <IoClose className={styles.clear_search} onClick={() => setSearchWord('')} size={35} fill="gray" />}
          <button type="submit" onClick={submitter}>
            <img src="/search.png" alt="search" />
          </button>
        </form>
      </header>
      <span className={styles.hide_on_desktop}>
        <LinkSearchBar
          setSearch={() => setSearch(!search)}
          search={slug.replace("%20", " ")}
        />
      </span>
      <span className={styles.category}>
        <p>News</p>
        <p>Images</p>
        <p>Videos</p>
        <p>Shopping</p>
      </span>
      <main className={styles.main}>
        <SearchResults data={data} />
        <Pagination slug={slug} page={num} />
      </main>
      {search && (
        <SearchPage slug={searchWord} setSearch={() => setSearch(!search)} />
      )}
    </>
  );
};
export default ResultsPage;
