import express from 'express';
import { createUserProfile, getAllUserProfile,getUserProfileById} from '../controllers/userprofile.js';

const router = express.Router();

router.post('/createUser', createUserProfile);
router.get('/getAllUsers', getAllUserProfile);
router.get('/:id', getUserProfileById);

export default router;