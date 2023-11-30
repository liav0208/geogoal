import express, { Request, Response } from "express";
import turf from "@turf/turf";

import generateRandomPoint from "../utils/randomPoint";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    res.status(400).json({
      status: "fail",
      data: {
        message: "Missing lat or lng",
      },
    });
  }

  const goalPoint = generateRandomPoint(Number(lat), Number(lng), 1);

  res.status(200).json({
    status: "success",
    data: {
      point: goalPoint,
    },
  });
});

export default router;
