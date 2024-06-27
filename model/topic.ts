import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  order: Number,
  language: String,
  name: String,
  content: [String],
  title: String,
  siteDescription: String,
  markdown: String,
  isPublished: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
