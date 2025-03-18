import express from 'express';
import admin from '../firebase/firebase.js'; // Ensure correct path
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Firebase Admin SDK cannot authenticate users directly
router.post('/login', async (req, res) => {
  res.status(400).json({ error: "Login must be handled on the client using Firebase Auth SDK." });
});

export default router;
