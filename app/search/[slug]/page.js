import { notFound } from "next/navigation";
import ResultsPage from "../components/ResultsPage/ResultsPage";

const APIKEY = process.env.API_KEY;

// This makes all the fetch API request

export const fetchData = async ({ slug, num }) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${slug}&pageSize=10&page=${num}&apiKey=${APIKEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  if(!data.articles.length) notFound()

  return data;
};

// This is the page. It is async as it awaits the response from the API before the server gives a response

const SearchResultsPage = async ({
  params: { slug },
  searchParams: { page },
}) => {
  const num = page ? +page : 1;
  const data = await fetchData({ slug, num });

  return <ResultsPage data={data} num={num} slug={slug} />;
};

export default SearchResultsPage;
