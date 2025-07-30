import ChannelModel from '../models/channelModel.js';
import UserModel from '../models/usermodel.js';

// Create a new channel (protected)
export const createChannel = async (req, res) => {
  try {
    const { channelName, description, channelPic, channelBanner } = req.body;

    // Create channel document
    const channel = await ChannelModel.create({
      channelName,
      description,
      channelPic,
      channelBanner,
      owner: req.user.id
    });

    // Link channel to user
    await UserModel.findByIdAndUpdate(req.user.id, { channel: channel._id });

    // Respond with channelId for frontend consistency
    res.status(201).json({
      ...channel.toObject(),
      channelId: channel._id.toString()
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get channel by channel ID (public)
export const getChannelById = async (req, res) => {
  try {
    const channel = await ChannelModel.findById(req.params.id).populate('videos');
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    // Add channelId for frontend
    res.json({
      ...channel.toObject(),
      channelId: channel._id.toString()
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get channel by user ID (public)
export const getChannelByUser = async (req, res) => {
  try {
    const channel = await ChannelModel.findOne({ owner: req.params.userId }).populate('videos');
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    res.json({
      ...channel.toObject(),
      channelId: channel._id.toString()
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update channel details (protected, only owner)
export const updateChannel = async (req, res) => {
  try {
    const channel = await ChannelModel.findById(req.params.id);
    if (!channel || channel.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    Object.assign(channel, req.body);
    await channel.save();
    res.json({
      ...channel.toObject(),
      channelId: channel._id.toString()
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete channel (protected, only owner)
export const deleteChannel = async (req, res) => {
  try {
    const channel = await ChannelModel.findById(req.params.id);
    if (!channel || channel.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await channel.remove();
    res.json({ message: "Channel deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};