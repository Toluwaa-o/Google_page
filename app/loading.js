import styles from './page.module.css'

const Loading = () => {
  return <div className={styles.loader_page}>
    <div className={styles.loader}></div>
  </div>
};
export default Loading;