const express = require("express");
const router = express.Router();

const {register,login,verify} = require("../controller/Login/Login.js");

const auth = require("../middleware/auth.js");
router.post("/register",register);
router.post("/login",login);
router.get("/verify",auth,verify);

module.exports = router;