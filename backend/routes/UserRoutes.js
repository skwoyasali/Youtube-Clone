import express from 'express';
import { registerUser, loginUser } from '../controllers/UserController.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',loginUser);

export default router;