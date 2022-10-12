const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {
  getPosts,
  getOnePosts, 
  createPosts,
  updatePosts,
  deletePosts,
} = require("../controllers/postController");


router.route('/').get(protect,getPosts).post(protect,createPosts);
router.route('/:id').get(protect,getOnePosts).put(protect,updatePosts).delete(protect,deletePosts);



module.exports = router;
