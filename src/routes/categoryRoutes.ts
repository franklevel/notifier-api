
import express, { Router } from 'express';
import { getAll } from '../controllers/categoryController';

const router: Router = express.Router();

router.get('/', getAll);

export { router as categoryRouter };
