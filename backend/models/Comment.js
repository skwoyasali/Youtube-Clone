import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  commentId: String,
  videoId: String,
  userId: String,
  text: String,
  timestamp: Date
});

export default mongoose.model('Comment', commentSchema);