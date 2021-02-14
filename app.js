import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) =>
  res.send(`Express Server is running on PORT: ${port}`)
);

app.get("/properties", (req, res) => "properties");

app.listen(port, () =>
  console.log(`Express server app is listening on port ${port}!`)
);
