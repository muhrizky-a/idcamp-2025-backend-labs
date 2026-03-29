import { describe, expect, it } from 'vitest';
import UserVerificationRepository from '../UserVerificationRepository.js';

describe('UserVerificationRepository interface', () => {
  it('should throw error when invoke unimplemented method', async () => {
    // Arrange
    const userVerificationRepository = new UserVerificationRepository();

    // Action & Assert
    await expect(userVerificationRepository.addToken({})).rejects.toThrowError('USER_VERIFICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userVerificationRepository.getLatestValidTokenByEmail('')).rejects.toThrowError('USER_VERIFICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userVerificationRepository.setTokenIdUsed('')).rejects.toThrowError('USER_VERIFICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
