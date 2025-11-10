import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// ➕ Add new event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📜 Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ eventTime: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
