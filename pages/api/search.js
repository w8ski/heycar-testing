import { capitalize } from "../../src/utils/capitalize";

export default function handler(req, res) {
  const { q } = req.query;
  const results = [
    {
      title: "Hello World",
      query: capitalize(q),
    },
  ];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
