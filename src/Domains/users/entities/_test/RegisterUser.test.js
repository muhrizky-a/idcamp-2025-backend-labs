import RegisterUser from '../RegisterUser.js';

describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {};

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      email: 123,
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when email contains restricted character', () => {
    // Arrange
    const payload = {
      email: "jo hn@doe.com",
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.EMAIL_NOT_VALID');
  });

  it('should create registerUser object correctly', () => {
    // Arrange
    const payload = {
      email: "john@doe.com",
    };

    // Action
    const { email } = new RegisterUser(payload);

    // Assert
    expect(email).toEqual(payload.email);
  });
});
