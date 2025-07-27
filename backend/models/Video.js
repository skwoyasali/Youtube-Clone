import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  description: { type: String },
  channelId: { type: String, required: true },
  uploader: { type: String, required: true }, // You may replace this with `type: mongoose.Schema.Types.ObjectId, ref: 'User'` for relational mapping
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now },
});

export default mongoose.model('Video', videoSchema);