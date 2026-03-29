import { describe, expect, it } from "vitest";
import CreateUserVerification from "../CreateUserVerification.js";

describe("CreateUserVerification entities", () => {
  it("should throw error when payload not contain needed property", () => {
    // Arrange
    const payload = {
      userId: "user-123",
    };

    // Action & Assert
    expect(() => new CreateUserVerification(payload)).toThrowError(
      "CREATE_USER_VERIFICATION.NOT_CONTAIN_NEEDED_PROPERTY",
    );
  });

  it("should throw error when payload not meet data type specification", () => {
    // Arrange
    const payload = {
      userId: "user-123",
      token: 123456,
    };

    // Action & Assert
    expect(() => new CreateUserVerification(payload)).toThrowError(
      "CREATE_USER_VERIFICATION.NOT_MEET_DATA_TYPE_SPECIFICATION",
    );
  });

  it("should create NewUserVerification entities correctly", () => {
    // Arrange
    const payload = {
      userId: "user-123",
      token: "123456",
    };

    // Action
    const createUserVerification = new CreateUserVerification(payload);

    // Assert
    expect(createUserVerification).toBeInstanceOf(CreateUserVerification);
    expect(createUserVerification.userId).toEqual(payload.userId);
    expect(createUserVerification.token).toEqual(payload.token);
  });
});
