import styles from './SearchResults.module.css'

const SearchResults = ({data}) => {
  return <div className={styles.search_results}>
  {data.articles.map((res) => {
    return (
      <div key={res.description} className={styles.result}>
        <a href={res.url} target="_blank" rel="noopener noreferrer">
          <img src={res.urlToImage} alt={res.source.name} />
          <span>
            <h2>{res.source.name}</h2>
            <p>{res.url.substring(0, 30)}...</p>
          </span>
        </a>
        <a
          className={styles.link_blue}
          href={res.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {res.title}
        </a>
        <p>{res.content.substring(0, 120)}...</p>
      </div>
    );
  })}
</div>
};

export default SearchResults;