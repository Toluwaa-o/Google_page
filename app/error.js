"use client"; // Error components must be Client Components

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import LinkSearchBar from "./components/Search/LinkSearchBar";
import styles from "./search/components/ResultsPage/ResultsPage.module.css";
import { MdError } from "react-icons/md";

export default function Error({ error, reset }) {
  const [search, setSearch] = useState(false);
  const params = useParams();
  const [searchWord, setSearchWord] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (params.slug) setSearchWord(params.slug.replace("%20", " "));
  }, []);

  const submitter = (e) => {
    e.preventDefault();
    if (searchWord) router.push(`/search/${searchWord}`);
  };

  return (
    <div>
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
          <button type="submit" onClick={submitter}>
            <img src="/search.png" alt="search" />
          </button>
        </form>
      </header>
      <span className={styles.hide_on_desktop}>
        <LinkSearchBar
          setSearch={() => setSearch(!search)}
          search={searchWord}
        />
      </span>
      <main className={styles.error_section}>
        <MdError className={styles.error_section_icon} size={80} color="red" />
        <p>Something went wrong!</p>
        <button onClick={() => reset()}>Refresh Page</button>
      </main>
    </div>
  );
}
