import { Layout } from "../src/components/Layout/Layout";

const Search = ({ results }) => (
  <Layout>
    <h1>Results:</h1>
    {results.map((result, idx) => (
      <div key={result.title}>
        <h1>
          {idx + 1}. {result.title}
          <br />
          <small>{result.query}</small>
        </h1>
      </div>
    ))}
  </Layout>
);

export async function getServerSideProps(context) {
  const query = context.query.q;
  const res = await fetch(`${process.env.HOST}/api/search?q=${query}`);
  const { results } = await res.json();

  return {
    props: {
      results,
    },
  };
}

export default Search;
