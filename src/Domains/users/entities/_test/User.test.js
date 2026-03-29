import User from "../User";

describe('a User entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      email: "john@doe.com",
    };

    // Action and Assert
    expect(() => new User(payload)).toThrowError('USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      email: {},
    };

    // Action and Assert
    expect(() => new User(payload)).toThrowError('USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create user object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      email: "john@doe.com",
    };

    // Action
    const user = new User(payload);

    // Assert
    expect(user.id).toEqual(payload.id);
    expect(user.email).toEqual(payload.email);
  });
});
