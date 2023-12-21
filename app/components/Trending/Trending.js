import Link from "next/link"
import {FaArrowTrendUp} from "react-icons/fa6"

const data = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Trending = () => {
  return (
    <div>
      {data.map((str) => {
        return (
          <Link key={str} href={`/search/${str}`}>
            <FaArrowTrendUp />
            <p>{str}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Trending