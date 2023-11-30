import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    status: "success",
    data: {
      data: "data",
    },
  });
});

export default router;
