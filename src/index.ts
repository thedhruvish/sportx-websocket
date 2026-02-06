import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`server are the runing http://localhost:${PORT}`)
);
