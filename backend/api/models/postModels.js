const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

const PostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
});

module.exports = mongoose.model('Post', PostSchema);