'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogPostModels = require('./blogPostModels');

var _blogPostModels2 = _interopRequireDefault(_blogPostModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var commentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  blogPost: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'BlogPost'
  },
  likes: {
    type: [Number],
    required: false,
    default: 0
  },
  dislikes: {
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
module.exports = _mongoose2.default.model('Comment', commentSchema);
//# sourceMappingURL=comments.js.map