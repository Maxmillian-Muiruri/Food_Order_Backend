import express from "express";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import { AdminRoute, VandorRoute } from "./routes";

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

// Start server
app.listen(8000, () => {
  console.log("App is listening on port 8000");
});
