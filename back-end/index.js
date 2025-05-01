import express, { json } from "express";
import userRuter from "./routers/user.route.js";
import pinRuoter from "./routers/pin.route.js"
import commentRouter from "./routers/comment.route.js"
import boardRouter from "./routers/board.route.js"
import connectDB from "./utils/conntectDB.js";
import cors from "cors";

const app = express();

// xpressjs do not allow to parse json data by default, so we need to use express.json() middleware to parse json data
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL}));

app.use("/users", userRuter);
app.use("/pins", pinRuoter);
app.use("/comments", commentRouter);
app.use("/boards", boardRouter);

app.listen(3000, () => {
  connectDB();
  console.log("server is running 2");
});
