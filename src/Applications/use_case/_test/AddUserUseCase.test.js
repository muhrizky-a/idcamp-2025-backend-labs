import { vi } from 'vitest';
import RegisterUser from '../../../Domains/users/entities/RegisterUser.js';
import RegisteredUser from '../../../Domains/users/entities/RegisteredUser.js';
import UserRepository from '../../../Domains/users/UserRepository.js';
import AddUserUseCase from '../AddUserUseCase.js';

describe('AddUserUseCase', () => {
  /**
   * Menguji apakah use case mampu mengoskestrasikan langkah demi langkah dengan benar.
   */
  it('should orchestrating the add user action correctly', async () => {
    // Arrange
    const useCasePayload = {
      email: 'john@doe.com',
    };
    const mockRegisteredUser = new RegisteredUser({
      id: 'user-123',
      email: 'john@doe.com',
    });

    /** creating dependency of use case */
    const mockUserRepository = new UserRepository();

    /** mocking needed function */
    mockUserRepository.getUserByEmail = vi.fn()
      .mockImplementation(() => Promise.resolve(null));
    mockUserRepository.addUser = vi.fn()
      .mockImplementation(() => Promise.resolve(mockRegisteredUser));

    /** creating use case instance */
    const addUserUseCase = new AddUserUseCase({
      userRepository: mockUserRepository,
    });

    // Action
    const registeredUser = await addUserUseCase.execute(useCasePayload);

    // Assert
    expect(registeredUser).toStrictEqual(new RegisteredUser({
      id: 'user-123',
      email: useCasePayload.email,
    }));
    expect(mockUserRepository.getUserByEmail).toBeCalledWith(useCasePayload.email);
    expect(mockUserRepository.addUser).toBeCalledWith(new RegisterUser({
      email: useCasePayload.email,
    }));
  });
});
