import express from "express";
import { handle } from "express/lib/application";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res, next) => {
  return res.send("I love middlewares");
};

app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);
