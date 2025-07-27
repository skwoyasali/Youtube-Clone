import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    avatar: {
      type: String,
      default: '',
    },
    channels: [
      {
        type: String, // Can also be ObjectId if using separate Channel model
        required: true,
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

export default mongoose.model('User', userSchema);
