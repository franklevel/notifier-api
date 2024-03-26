
import express, { Router } from 'express';
import { sendNotification } from '../controllers/notificationController';

const router: Router = express.Router();

router.post('/send', sendNotification);

export { router as notificationRouter };
