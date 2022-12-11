require("dotenv").config();
require("express-async-errors");
require("./db/connect");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const router = require("./routes/main");
const connectDB = require("./db/connect");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
