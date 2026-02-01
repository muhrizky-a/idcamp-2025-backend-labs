import response from '../utils/response.js';
import { ClientError } from '../exceptions/index.js';

const ErrorHandler = (err, req, res, next) => {
    // Handle ClientError and its subclasses (InvariantError, NotFoundError)
    if (err instanceof ClientError) {
        return response({
            res,
            statusCode: err.statusCode,
            message: err.message,
            data: null,
        });
    }

    // Handle Joi validation errors
    if (err.isJoi) {
        return response({
            res,
            statusCode: 400,
            message: err.details[0].message,
            data: null,
        });
    }

    const statusCode = err.statusCode || err.status || 500;
    const message = err.message || 'Internal Server Error';

    console.error('Unhandled error:', err);
    return response({
        res,
        statusCode,
        message,
        data: null,
    });
};

export default ErrorHandler;