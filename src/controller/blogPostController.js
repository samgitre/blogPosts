
import mongoose from 'mongoose';
import express from 'express';
import BlogPost  from '../models/blogPostModel';
import Comment  from '../models/commentsModel';


export default({config, dbConfig}) =>{
  let route = express.Router();

  // //creating blog post.
  route.post('/create', (req,res) => {
    let newPost =  new BlogPost();
    newPost.title = req.body.title;
    newPost.blogText = req.body.blogText;
    newPost.save((err) => {
      if(err){
        res.send(err);
      }
      res.json({message : 'blog posted successfully'});
    });
  });

//get all blog post
  route.get('/', (req,res) => {
    Posts .find({}, (err, allBlogs) => {
      if(err){
        res.send(err);
      }
      res.json(allBlogs);
    });
  });

 // get blog post by Id
  route.get('/:id', (req,res) => {
    Posts .findById(req.params.id, (err, blogFound) => {
      if(err){
        res.send(err);
      }
      res.json(allBlogs);
    });
  });

 //delete blog post
  route.delete('/:id', (req,res) => {
    Posts .remove({_id : req.params.id}, (err) => {
      if(err){
        res.send(err);
      }
      res.json({message: 'blog post has been deleted successfully'});
    });
  });

//likeing blog post.
  route.post('/like', (req, res) => {
    let postId = req.params.id;
    Posts.findOne({_id:postId}, (err, postFound) => {
      if(err){
        res.send(err);
      }
      Posts.update({_id:blogPost},
        {$set:{likes: postFound.likes += 1}}, (err) => {
          if(err){
            res.send(err);
          }
          res.json({message :'Thanks for liking this comment!'});

        });
    });
  });

//dislikeing blog post.
  route.post('/dislike', (req, res) => {
    let postId = req.params.id;
    Posts.findOne({_id:postId}, (err, postFound) => {
      if(err){
        res.send(err);
      }
      Posts.update({_id:blogPost},
        {$set:{likes: postFound.likes -= 1}}, (err) => {
          if(err){
            res.send(err);
          }
          res.json({message :'unliked !!!'});
        });
    });
  });

   //api/blogPost/:id (Updating blog post)
  route.put('/:id',(req,res) => {
    Posts.find(req.params.id,(err,blogFound) => {
      if(err){
        res.send(err);
      }
      blogFound.title = req.body.title,
      blogFound.blogText = req.body.blogText
    });
    blogFound.save((err, success) => {
      if(err){
        res.send(err);
      }
      res.json({message :'blog post has been update successfully'});
    });
  });

// adding comment to blog posts
  route.post('/comment/add/:id', (req,res) => {
    Posts.findById(req.params.id, (err, blogFound) => {
      if(err){
        res.send(err);
      }
      let newComment  = new Comment();
      newComment.title = req.body.title;
      newComment.comment = req.body.comment;
      newComment.save((err) => {
        if(err){
          res.send(err);
        }
        Posts.comments.push(newComment);
        Posts.save(err => {
          if(err){
            res.send(err);
          }
          res.json({message : 'comment added successfully'});
        });
      });
    });
  });
  
//getting comment by Id
  route.get('/comment/:id', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
      if (err) {
        res.send(err);
      }
      res.json(comment);
    });
  });
  return route;
}
