'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var blogPost = new Schema({
  title: {
    type: String,
    required: true
  },
  blogText: {
    type: String,
    required: true
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment'
  },
  likes: {
    type: [Number],
    required: false,
    default: 0
  },
  dislike: {
    type: [Number],
    required: false,
    default: 0
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  } });
module.exports = _mongoose2.default.model('BlogPost', blogPost);
//# sourceMappingURL=blogPostModels.js.map