const express = require("express");
const router = express.Router();
const { protectAdmin } = require("../middleware/adminMiddleware");
const {
  registerAdmin,
  loginAdmin,
  updateProfile,
  getAdmin,
} = require("../controllers/adminController");

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/getMe").get(protectAdmin, getAdmin);
router.route("/updateMe").put(protectAdmin,updateProfile);

module.exports = router;
