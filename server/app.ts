import express, { Request, Response } from "express";
import cors from "cors";

import setGoalRoute from "./routes/setGoal";

const app = express();

app.use(express.json());
app.use(cors());
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
