import express from 'express';
import Channel from '../models/Channel.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const newChannel = new Channel(req.body);
  await newChannel.save();
  res.status(201).json(newChannel);
});

router.get('/:id', async (req, res) => {
  const channel = await Channel.findById(req.params.id);
  res.json(channel);
});

router.put('/:id', auth, async (req, res) => {
  const updated = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await Channel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Channel deleted' });
});

export default router;
