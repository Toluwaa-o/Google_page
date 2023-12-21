"use client";

import styles from "./page.module.css";
import Trending from "./components/Trending/Trending";
import LinkSearchBar from "./components/Search/LinkSearchBar";
import SearchPage from "./search/components/Page/SearchPage";
import { useState } from "react";


// This is the home page

export default function Home() {
  const [search, setSearch] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.top}>
          <img
            src="/google_icon.png"
            alt="Google logo"
            className={styles.logo}
          />

          <LinkSearchBar setSearch={() => setSearch(!search)} />
        </div>

        <div className={styles.trending_bar}>
          <h3>Trending searches</h3>
          <Trending />
        </div>
      </main>
      {search && <SearchPage setSearch={() => setSearch(!search)} />}
    </>
  );
}
