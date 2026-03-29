class UserVerificationRepository {
  async addToken(payload) {
    throw new Error('USER_VERIFICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getLatestValidTokenByEmail(email) {
    throw new Error('USER_VERIFICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async setTokenIdUsed(id) {
    throw new Error('USER_VERIFICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

export default UserVerificationRepository;
