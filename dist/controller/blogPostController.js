'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _blogPostModels = require('../models/blogPostModels');

var _blogPostModels2 = _interopRequireDefault(_blogPostModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      dbConfig = _ref.dbConfig;

  var route = _express2.default.Router();

  //creating blog post.

  route.post('/createBlog', function (req, res) {
    var newPost = new Blog({
      title: req.body.title,
      blogText: req.body.blogText
    });
    newPost.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'blog posted successfully' });
    });
  });

  //get all blog post
  route.get('/', function (req, res) {
    _blogPostModels2.default.find({}, function (err, allBlogs) {
      if (err) {
        res.send(err);
      }
      res.json(allBlogs);
    });
  });

  // get blog post by Id
  route.get('/:id', function (req, res) {
    _blogPostModels2.default.findById(req.params.id, function (err, blogFound) {
      if (err) {
        res.send(err);
      }
      res.json(allBlogs);
    });
  });

  //delete blog post
  route.delete('/:id', function (req, res) {
    _blogPostModels2.default.remove({ _id: req.params.id }, function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'blog post has been deleted successfully' });
    });
  });

  //likeing blog post.
  route.post('/like', function (req, res) {
    var postId = req.params.id;
    _blogPostModels2.default.findOne({ _id: postId }, function (err, postFound) {
      if (err) {
        res.send(err);
      }
      _blogPostModels2.default.update({ _id: blogPost }, { $set: { likes: postFound.likes += 1 } }, function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Thanks for liking this comment!' });
      });
    });
  });

  //dislikeing blog post.
  route.post('/dislike', function (req, res) {
    var postId = req.params.id;
    _blogPostModels2.default.findOne({ _id: postId }, function (err, postFound) {
      if (err) {
        res.send(err);
      }
      _blogPostModels2.default.update({ _id: blogPost }, { $set: { likes: postFound.likes -= 1 } }, function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'unliked !!!' });
      });
    });
  });

  //api/blogPost/:id (Updating blog post)
  route.put('/:id', function (req, res) {
    _blogPostModels2.default.find(req.params.id, function (err, blogFound) {
      if (err) {
        res.send(err);
      }
      Blog.title = req.body.title, Blog.blogText = req.body.blogText;
    });
    Blog.save(function (err, success) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'blog post has been update successfully' });
    });
  });
  return route;
};
//# sourceMappingURL=blogPostController.js.map