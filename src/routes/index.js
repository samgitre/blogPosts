import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDB from '../dbConfig';
import blogPost from '../controller/blogPostController';

let router = express();

initializeDB(db =>{
  router.use(middleware({config, db}));

  //configuring the new router for creating new blogs;

  router.use('/blogs', blogPost(config, db));
});

export default router;
