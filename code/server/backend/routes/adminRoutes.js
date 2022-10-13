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
router.route("/getAdmin").get(protectAdmin, getAdmin);
router.route("/updateMe").put(updateProfile);

module.exports = router;
