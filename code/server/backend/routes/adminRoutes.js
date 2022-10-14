const express = require("express");
const router = express.Router();
const { protectAdmin } = require("../middleware/adminMiddleware");
const {
  registerAdmin,
  loginAdmin,
  getAdmin,
  updateProfile,
  addBus,
  updateBus
} = require("../controllers/adminController");

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/getMe").get(protectAdmin, getAdmin);
router.route("/updateMe").put(protectAdmin,updateProfile);
router.route("/addBus").post(protectAdmin,addBus);
router.route("/updateBus/:id").put(protectAdmin,updateBus);

module.exports = router;
