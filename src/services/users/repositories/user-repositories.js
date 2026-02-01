import { nanoid } from 'nanoid';
import users from '../users.js';


const createUser = async ({ email, password, fullname }) => {
    const id = nanoid(16);
    const hashedPassword = password; // TODO: encrypt password

    const newUser = {
        id,
        email,
        password: hashedPassword,
        fullname,
    };
    users.push(newUser);

    return newUser;
}

const verifyNewEmail = async (email) => {
    const index = users.findIndex((user) => user.email === email);
    return index !== -1;
}

const getUsers = async () => {
    return users.map(
        user => ({
            id: user.id,
            fullname: user.fullname,
        })
    );
}

export default {
    createUser,
    verifyNewEmail,
    getUsers,
}