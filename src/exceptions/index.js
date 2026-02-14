class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = 'ClientError';
        this.statusCode = statusCode;
    }
}

class InvariantError extends ClientError {
    constructor(message) {
        super(message);
        this.name = 'InvariantError';
    }
}

class NotFoundError extends ClientError {
    constructor(message) {
        super(message, 404);
        this.name = 'NotFoundError';
    }
}
class AuthorizationError extends ClientError {
    constructor(message) {
        super(message, 403);
        this.name = 'AuthorizationError';
    }
}

export {
    ClientError,
    InvariantError,
    NotFoundError,
    AuthorizationError,
};