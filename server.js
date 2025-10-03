import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/home", async (req, res) => {
  res.json({
    msg: "Hi, I am root!",
  });
});

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;
  res.json({
    ans: sum(parseInt(a), parseInt(b)), //parseInt - convert a and b to integer as they are extracted from req.params and are string type
  });
});
