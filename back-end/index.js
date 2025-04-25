import express, { json } from 'express'
import userRuter from "./routers/user.route.js"
import pinRuoter from "./routers/pin.route.js"
import commentRouter from "./routers/comment.route.js"
import boardRouter from "./routers/board.route.js"
import connectDB from "./utils/conntectDB.js"



const app = express();

app.use(express.json());


app.use("/users", userRuter);
app.use("/pins", pinRuoter);
app.use("/comments", commentRouter);
app.use("/boards", boardRouter);

app.listen(3000,()=> {
    connectDB()
    console.log("server is running 2");
});
