const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  register,
  login,
  getProfile,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.get("/profile", auth, getProfile); // verify token example
router.get("/", auth, getUsers);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
