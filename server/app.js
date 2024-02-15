const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoutes");
const linkRouter = require("./routes/linkRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use("/devlinks-api/v1/users", userRouter, linkRouter);
// app.use("/devlinks-api/v1/users", linkRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
