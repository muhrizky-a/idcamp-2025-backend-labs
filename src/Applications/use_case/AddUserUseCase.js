import RegisterUser from '../../Domains/users/entities/RegisterUser.js';

class AddUserUseCase {
  constructor({ userRepository }) {
    this._userRepository = userRepository;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);
    const user = await this._userRepository.getUserByEmail(registerUser.email);
    if (user) {
      return user;
    }

    return this._userRepository.addUser(registerUser);
  }
}

export default AddUserUseCase;
