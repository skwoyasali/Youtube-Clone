import express from 'express';
import Video from '../models/Video.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

router.post('/', auth, async (req, res) => {
  const newVideo = new Video(req.body);
  await newVideo.save();
  res.status(201).json(newVideo);
});

router.put('/:id', auth, async (req, res) => {
  const updated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: 'Video deleted' });
});

export default router;
