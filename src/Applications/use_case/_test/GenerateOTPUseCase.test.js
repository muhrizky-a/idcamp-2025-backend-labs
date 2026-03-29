import { describe, expect, it, vi } from 'vitest';
import LogoutUserUseCase from '../GenerateOTPUseCase.js';
import UserVerificationRepository from '../../../Domains/user_verifications/UserVerificationRepository.js';
import CreateUserVerification from '../../../Domains/user_verifications/entities/CreateUserVerification.js';
import GenerateOTPUseCase from '../GenerateOTPUseCase.js';

describe('GenerateOTPUseCase', () => {
  it('should orchestrating the generate OTP action correctly', async () => {
    // Arrange
    const useCasePayload = {
      userId: 'user-123',
    };

    const mockUserVerificationRepository = new UserVerificationRepository();
    mockUserVerificationRepository.addToken = vi.fn()
      .mockImplementation(() => Promise.resolve());

    const generateOTPUseCase = new GenerateOTPUseCase({
      userVerificationRepository: mockUserVerificationRepository,
      tokenGenerator: () => "123456",
    });

    // Act
    await generateOTPUseCase.execute(useCasePayload);

    // Assert
    expect(mockUserVerificationRepository.addToken).toHaveBeenCalledWith(new CreateUserVerification({
      userId: "user-123",
      token: "123456",
    }));
  });
});
