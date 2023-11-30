import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import setGoalRoute from "./routes/setGoal";
import checkDistanceRoute from "./routes/checkDistance";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/goal", setGoalRoute);
app.use("/api/v1/distance", checkDistanceRoute);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    data: {
      message: "Not Found",
    },
  });
});

export default app;
