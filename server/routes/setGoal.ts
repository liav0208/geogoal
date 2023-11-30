import express, { Request, Response } from "express";
import turf from "@turf/turf";

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

  const currentPoint = turf.point([req.query.lat, +lng]);

  console.log(lat, lng);
});

export default router;
