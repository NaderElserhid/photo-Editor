import express from "express";

const router = express.Router();

router.get("/comment", (req, res) => {
  return res.json("hello rom comment router");
});

export default router;
