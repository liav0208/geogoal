import express, { Request, Response } from "express";

import setGoalRoute from "./routes/setGoal";

const app = express();

app.use(express.json());

app.use("/api/v1/goal", setGoalRoute);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    data: {
      message: "Not Found",
    },
  });
});

export default app;
