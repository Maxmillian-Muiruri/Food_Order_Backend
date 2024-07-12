import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { AdminRoute } from "./routes/AdminRoute";

import { VandorRoute } from "./routes/vandorRoute";

import { MONGO_URI } from "./config";

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Start server
app.listen(8000, () => {
  console.log("App is listening on port 8000");
});
