import express from "express";
import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import {getUser} from "../controllers/user.controller.js"

const router = express.Router();

router.get("/:username",getUser)
router.post("/create", async (req, res) => {
  const hashedPassword = await bycrypt.hash(req.body.password, 10);
  await User.create({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  res.send("User crated successfully!");
});

router.get("/fatch", async (req, res) => {
  const users = await User.find({});
  res.send(users);
}
);
export default router;
