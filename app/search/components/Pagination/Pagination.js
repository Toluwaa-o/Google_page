import Link from "next/link";
import styles from "./Pagination.module.css";
import { GoDash } from "react-icons/go";

const Pagination = ({ slug, page }) => {
  const num = +page;

  return (
    <div className={styles.pagination}>
      {num < 2 ? (
        <Link className={styles.invalid_link} href={`/search/${slug}?page=${num}`}>Previous</Link>
      ) : (
        <Link className={styles.valid_link} href={`/search/${slug}?page=${num - 1}`}>Previous</Link>
      )}
      <GoDash />
      <Link className={styles.valid_link} href={`/search/${slug}?page=${num + 1}`}>Next</Link>
    </div>
  );
};
export default Pagination;
