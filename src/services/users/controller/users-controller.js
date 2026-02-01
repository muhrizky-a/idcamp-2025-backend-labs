import UserRepositories from '../repositories/user-repositories.js';
import response from '../../../utils/response.js';
import { InvariantError } from '../../../exceptions/index.js';

export const createUser = async (req, res, next) => {
    const { email, password, fullname } = req.validated;

    const isEmailExist = await UserRepositories.verifyNewEmail(email);
    if (isEmailExist) {
        return next(new InvariantError('Gagal menambahkan user. Email sudah terdaftar.'));
    }

    const user = await UserRepositories.createUser({
        email,
        password,
        fullname,
    });

    if (!user) {
        return next(new InvariantError('User gagal ditambahkan'));
    }

    return response({
        res,
        statusCode: 201,
        message: 'User berhasil ditambahkan',
        data: user,
    });
};

export const getUsers = async (req, res, next) => {
    const users = await UserRepositories.getUsers();

    return response({
        res,
        statusCode: 200,
        message: 'success',
        data: users,
    });
}; 