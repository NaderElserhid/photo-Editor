import express from "express";

const router = express.Router();

router.get("/pin", (req, res) => {
  return res.json("hello rom pin router");
});

export default router;
