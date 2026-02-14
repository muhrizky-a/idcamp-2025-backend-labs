import { NotFoundError } from '../../../exceptions/index.js';
import response from '../../../utils/response.js';
import midtransClient from 'midtrans-client';
import { packages } from '../repositories/payment-repository.js';

export class PaymentController {
    constructor() {
        this.snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVER_KEY,
            clientKey: process.env.MIDTRANS_CLIENT_KEY,
        });

        this.createNewTransaction = this.createNewTransaction.bind(this);
        this.processTransaction = this.processTransaction.bind(this);
    }

    async createNewTransaction(req, res, next) {
        const { package_id, name, email } = req.validated;

        // Cari paket
        const selectedPackage = packages.find(p => p.id === package_id);
        if (!selectedPackage) {
            return next(new NotFoundError('package not found'));
        }

        const orderId = 'ORDER-' + Date.now();

        const parameter = {
            transaction_details: {
                order_id: orderId,
                gross_amount: selectedPackage.price,
            },
            customer_details: {
                first_name: name,
                email,
            }
        };

        const transaction = await this.snap.createTransaction(parameter);

        // TODO: store to database with status is pending

        const transactionInfo = {
            order_id: orderId,
            snap_url: transaction.redirect_url
        };

        return response(res, 201, 'transaction created', transactionInfo);
    }
    async processTransaction(req, res, next) {
        const notification = req.body;

        const {
            order_id,
            status_code,
            gross_amount,
            signature_key,
            transaction_status,
            fraud_status
        } = notification;

        // 🔐 Verify signature
        const hash = crypto
            .createHash('sha512')
            .update(order_id + status_code + gross_amount + process.env.MIDTRANS_SERVER_KEY)
            .digest('hex');

        if (hash !== signature_key) {
            return next(new AuthorizationError('invalid signature'));
        }

        let status = 'pending';
        if (transaction_status === 'capture') {
            if (fraud_status === 'accept') {
                status = 'success';
            }
        } else if (transaction_status === 'settlement') {
            status = 'success';
        } else if (transaction_status === 'cancel' ||
            transaction_status === 'deny' ||
            transaction_status === 'expire') {
            status = 'failed';
        }

        // TODO: update status in database

        const transactionInfo = {
            order_id,
            status,
        };

        return response(res, 200, 'transaction success', transactionInfo);
    }
}