import express from "express";
import fs from "fs";

const app = express();
const port = 4000;

app.get("/", (req, res) =>
  res.send(`Express Server is running on PORT: ${port}`)
);

app.get("/test", (req, res) => res.send("Test"));

app.get("/properties", (req, res) => {
  fs.readFile("./data/properties.json", "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.listen(port, () =>
  console.log(`Express server app is listening on port ${port}!`)
);
