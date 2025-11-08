// routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import User from "../models/user.js";
import { sendVerificationEmail, sendResetPasswordEmail } from "../utils/mail.js";

const router = express.Router();

/* ---------- VIEW ROUTES ---------- */

// Login page (default)
router.get("/login", (req, res) => {
  res.render("index");
});

// Optional route (if user visits /register manually)
router.get("/register", (req, res) => {
  res.render("index");
});

/* ---------- AUTH ROUTES ---------- */

// REGISTER
router.post("/register", async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists)
      return res.status(400).json({ message: "Email or username already registered." });

    const hashed = await bcrypt.hash(password, 10);
    const token = uuidv4();

    const user = new User({
      name,
      username,
      email,
      password_hash: hashed,
      verification_token: token,
      verification_token_expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    await user.save();
    await sendVerificationEmail(email, token);

    res.status(201).json({
      message: "Registered successfully! Please check your email for verification link.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// VERIFY EMAIL
router.get("/verify-email", async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ verification_token: token });
    if (!user) return res.status(400).send("Invalid token.");
    if (user.verification_token_expires < Date.now())
      return res.status(400).send("Token expired.");

    user.verified = true;
    user.verification_token = null;
    user.verification_token_expires = null;
    await user.save();

    res.render("index", { message: "Email verified! You can now log in." });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found." });
    if (!user.verified) return res.status(400).json({ message: "Please verify your email first." });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(400).json({ message: "Invalid password." });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
