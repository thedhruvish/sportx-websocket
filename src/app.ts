import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    message: "Ok",
  });
});

export default app;
