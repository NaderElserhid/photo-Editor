import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
  followUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:username", getUser);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);
router.post("/follow/:username", followUser);

export default router;