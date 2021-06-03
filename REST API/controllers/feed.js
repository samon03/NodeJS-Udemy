const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res
        .status(200)
        .json({ message: 'Fetched', posts: posts });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    const error = new Error('Validation failed, entered a correct data!');
    error.statusCode = 422;
    throw error;
  } 

  const title = req.body.title;
  const content = req.body.content;

  const post = new Post({
    title: title, 
    content: content,
    imageUrl: 'images/panda.jpg',
    creator: { name: 'Samon' },
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
   const postId = req.params.postId;

   Post.findById(postId)
     .then(post => {
       if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
       }
       res.status(200).json({ message: 'Post Fetched', post: post });
     })
     .catch(err => {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
    });
};