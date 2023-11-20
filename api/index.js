const express = require ("express");
const mongoose = require ("mongoose");
const cookieParser = require ("cookie-parser");
const path = require ("path");
const morgan = require ("morgan");
const dotenv = require ("dotenv");
const userRouter = require ("./routes/user.route.js")
const authRouter = require ("./routes/auth.route.js")
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// const __dirname = path.resolve();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)