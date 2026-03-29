import InvariantError from '../../Commons/exceptions/InvariantError.js';
import RegisteredUser from '../../Domains/users/entities/RegisteredUser.js';
import UserRepository from '../../Domains/users/UserRepository.js';

class UserRepositoryPostgres extends UserRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async getUserByEmail(email) {
    const query = {
      text: 'SELECT id, email FROM users WHERE email = $1',
      values: [email],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      return new RegisteredUser({ ...result.rows[0] });
    }

    return null;
  }

  async addUser(registerUser) {
    const { email } = registerUser;
    const id = `user-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO users VALUES($1, $2) RETURNING id, email',
      values: [id, email],
    };

    const result = await this._pool.query(query);

    return new RegisteredUser({ ...result.rows[0] });
  }
}

export default UserRepositoryPostgres;
