import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  channelName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  logoUrl:{type: String, required: true},
  logoId:{type: String, required: true},
  subscriber:{type: Number,default:0},
  subscribedChannel:{type: Number,default:0},
});

export default mongoose.model('User', userSchema);