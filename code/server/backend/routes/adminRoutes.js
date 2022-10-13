const express = require("express")
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {registerAdmin, loginAdmin} = require("../controllers/adminController")

router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);

module.exports = router;