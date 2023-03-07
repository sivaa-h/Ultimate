const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Load env variables
dotenv.config();

// Middle wares
app.use(express.json());
app.use(cors());

// Importing routes
const userRoute = require("./src/presentation/routes/userroute");

// Using routes
app.use("/api", userRoute);

// DB Connection
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// Server Initiation
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
