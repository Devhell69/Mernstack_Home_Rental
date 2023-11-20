import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use("/api/user", userRouter)