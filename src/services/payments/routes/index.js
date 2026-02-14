import { Router } from 'express';
import { transactionPayloadSchema } from '../validator/schema.js';
import { validate } from '../../../middlewares/validate.js';

export function createPaymentRouter(paymentController) {
    const router = Router();
    router.post('/transactions', validate(transactionPayloadSchema), paymentController.createNewTransaction);
    router.post('/transactions/webhook', paymentController.processTransaction);

    return router;
}