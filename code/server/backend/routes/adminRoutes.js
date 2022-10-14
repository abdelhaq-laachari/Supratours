const express = require("express");
const router = express.Router();
const { protectAdmin } = require("../middleware/adminMiddleware");
const {
  registerAdmin,
  loginAdmin,
  getAdmin,
  updateProfile,
  addBus,
  getBuses,
  getBus,
  updateBus,
  deleteBus,
} = require("../controllers/adminController");

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/getMe").get(protectAdmin, getAdmin);
router.route("/updateMe").put(protectAdmin,updateProfile);
router.route("/addBus").post(protectAdmin,addBus);
router.route("/getBuses").get(protectAdmin,getBuses);
router.route("/getBus/:id").get(protectAdmin,getBus);
router.route("/updateBus/:id").put(protectAdmin,updateBus);
router.route("/deleteBus/:id").delete(protectAdmin,deleteBus);

module.exports = router;
