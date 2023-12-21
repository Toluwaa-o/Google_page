"use client";
import SearchBar from "../../../components/Search/SearchBar";
import styles from "./SearchPage.module.css";

const SearchPage = ({ setSearch, slug }) => {
  return (
    <main className={styles.searchpage}>
      <span>
        <SearchBar slug={slug} setSearch={setSearch} />
      </span>
    </main>
  );
};

export default SearchPage;
