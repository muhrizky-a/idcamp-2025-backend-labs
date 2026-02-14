import dotenv from 'dotenv';
import express from 'express';
import { createRouter } from './routes/index.js';
import ErrorHandler from './middlewares/error-handler.js';
import { PaymentController } from './services/payments/controller/payment-controller.js';


dotenv.config();
const app = express();
const port = 3000;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

const paymentController = new PaymentController();

app.use(express.json());
app.use(createRouter(paymentController));
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});