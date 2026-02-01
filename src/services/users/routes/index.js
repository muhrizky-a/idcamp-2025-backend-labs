import { Router } from 'express';
import validate from '../../../middlewares/validate.js';
import { createUser, getUsers } from '../controller/users-controller.js';
import { userPayloadSchema } from '../validator/schema.js';

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/users', getUsers);

export default router;