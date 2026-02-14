import { Router } from 'express';
import { createPaymentRouter } from '../services/payments/routes/index.js';

export function createRouter(paymentController) {
    const router = Router();

    router.use('/', createPaymentRouter(paymentController));
    return router;
}