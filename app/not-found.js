import Link from "next/link";
import styles from "./search/components/ResultsPage/ResultsPage.module.css";
import { MdError } from "react-icons/md";

export default function NotFound() {
  return (
    <main className={styles.error_section}>
      <MdError className={styles.error_section_icon} size={80} color="red" />
      <p>Page Not found!</p>
      <Link href="/">Back Home</Link>
    </main>
  );
}
