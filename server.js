const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); 
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/barberAppointments"; // Change the DB name as needed

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Connected to MongoDB");
}).catch(err => {
    console.error("❌ MongoDB connection error:", err);
});

// Define Appointment Schema
const appointmentSchema = new mongoose.Schema({
    barber: String,
    customerName: String,
    phone: String,
    services: [String],
    date: String,
    time: String
});

// Middleware to log all incoming requests
app.use((req, res, next) => {
    console.log(`➡️ [${new Date().toLocaleString()}] ${req.method} request to '${req.url}'`);
    if (Object.keys(req.body).length > 0) {
        console.log("📦 Request Body:", req.body);
    }
    next();
});

// Endpoint to handle bookings
app.post("/book", async (req, res) => {
    try {
        const { barber, customerName, phone, services, date, time } = req.body;

        if (!barber || !customerName || !phone || !services || !date || !time) {
            console.warn("⚠️ Missing fields in request:", req.body);
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a dynamic model for each barber
        const Appointment = mongoose.model(barber.replace(/\s+/g, "_"), appointmentSchema, barber.replace(/\s+/g, "_"));

        // Insert into the barber's collection
        const newAppointment = new Appointment({ barber, customerName, phone, services, date, time });
        await newAppointment.save();

        console.log(`✅ New appointment booked for ${barber}:`, newAppointment);

        res.json({ message: "✅ Appointment successfully booked!" });
    } catch (error) {
        console.error("❌ Booking error:", error.message);
        res.status(500).json({ message: "❌ Internal Server Error" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
