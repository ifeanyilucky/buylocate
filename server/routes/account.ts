import { Router } from 'express';
import { createAddress, getAddress } from '../controllers/account';
import auth from '../middleware/auth';
const router = Router();

router.route('/address/new').post(auth, createAddress);
router.route('/address/all').get(auth, getAddress);
export default router;
