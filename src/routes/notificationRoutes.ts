
import express, { Router } from 'express';
import { sendNotification, getAll } from '../controllers/notificationController';

const router: Router = express.Router();

router.post('/send', sendNotification);

router.get('/', getAll);

export { router as notificationRouter };
