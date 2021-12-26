import { Router, Request, Response } from "express";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.json({
      status: 200,
      message: "Get data has success with typescript",
    });
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
});

export default router;
