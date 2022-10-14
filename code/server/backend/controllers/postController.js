const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");

// @desc    Get posts
// @route   GET /api/posts
// @access  Private

const getPosts = asyncHandler(async (req, res) => {
  const post = await Post.find({user: req.user.id});
  res.status(200).json(post);
});

// @desc    Get a specific post
// @route   GET /api/posts/:id
// @access  Private

const getOnePosts = asyncHandler(async (req, res) => {
  res.send("Post number " + req.params.id);
});

// @desc    Create posts
// @route   POST /api/posts
// @access  Private

const createPosts = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Title is required");
  }
  const post = await Post.create({
    title: req.body.title,
    user: req.user.id,
  });
  res.status(201).json(post);
});

// @desc    Update posts
// @route   PUT /api/posts/:id
// @access  Private

const updatePosts = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if(!post){
    res.status(404);
    throw new Error('Post not found');
  }

  // check for user
  const user = await User.findById(req.user.id)

  if(!user){
    res.status(404)
    throw new Error('User not found')
  }

  // make condition that allow only the user that crated this post can update it
  if(post.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized to update this post')
  }

  const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
});

// @desc    Delete posts
// @route   DELETE /api/posts/:id
// @access  Private

const deletePosts = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if(!post){
    res.status(404);
    throw new Error('Post not found');
  }

  const user = await User.findById(req.user.id)

  // check for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user match the post user
  if(post.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized to delete this post')
  }

  await post.remove();
  res.status(200).json({message: `Post with id: ${req.params.id} has been removed`});
});

module.exports = {
  getPosts,
  getOnePosts,
  createPosts,
  updatePosts,
  deletePosts,
};
