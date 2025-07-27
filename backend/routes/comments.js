import express from 'express';
import Comment from '../models/Comment.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:videoId', async (req, res) => {
  const comments = await Comment.find({ videoId: req.params.videoId });
  res.json(comments);
});

router.post('/', auth, async (req, res) => {
  const newComment = new Comment(req.body);
  await newComment.save();
  res.status(201).json(newComment);
});

router.put('/:id', auth, async (req, res) => {
  const updated = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Comment deleted' });
});

export default router;