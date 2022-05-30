import express from 'express';
const router = express.Router()
import { registers } from '../controllers'
router.post('/register', registers.register)
export default router