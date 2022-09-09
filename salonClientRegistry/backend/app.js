const cors = require("cors");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
require("dotenv").config();
const express = require("express");

const app = express();

//
const User = require("./schema/user.model.js");
const connectMongoDB = require("./config/db.js");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB
connectMongoDB();

// Get all registered appointments
app.get("/users", async (req, res) => {
  const user = await User.find();
  if (user) {
    res.json(user);
  } else {
    res.json({ message: "No appointments made" });
  }
});

// Get one registered appointment
app.get("/users/id", async (req, res) => {
  const id = req.query.id;
  const user = await User.findById(id);
  if (user) {
    res.json(user);
  } else {
    res.json({ message: "No appointments made" });
  }
});

// Register a client
app.post("/users", async (req, res) => {
  const { name, email, date } = await req.body;
  const appointmentMade = await User.findOne({ date });

  if (appointmentMade) {
    res.json({ message: "Time already occupied" });
  } else {
    const user = await User.create({
      name,
      email,
      date,
    });

    res.json({ message: "Appointment made" });
  }
});

// Delete client appointment
app.delete(`/users/:_id`, async (req, res) => {
  const id = req.params._id;
  if (id) {
    const user = await User.findByIdAndDelete(id);
    res.json({ message: "Appointment deleted" });
  } else {
    res.json({ message: "Appointment not found" });
  }
});

// Server
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
