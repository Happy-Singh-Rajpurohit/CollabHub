import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  desc: String,
  tags: [String],
  capMin: String,
  capMax: String,
  img: String,
  eventTime: Date // actual end time for auto delete
});

// Automatically delete expired events
eventSchema.index({ eventTime: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("Event", eventSchema);
