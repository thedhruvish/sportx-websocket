import express from "express";
import leaguesRouter from "@/routers/leagues.route.js";
import liveEventsRouter from "@/routers/live-devents.route.js";
import matchesRouter from "@/routers/matches.route.js";
import sportsRouter from "@/routers/sports.route.js";
import teamsRouter from "@/routers/teams.route.js";
import { errorMiddleware } from "@/middlewares/globe-error.middleware.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    message: "Ok",
  });
});

app.use("/api/sports", sportsRouter);
app.use("/api/leagues", leaguesRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/matches", matchesRouter);
app.use("/api/live-events", liveEventsRouter);

app.use(errorMiddleware);

export default app;
