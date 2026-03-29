class CreateUserVerification {
  constructor(payload) {
    this._verifyPayload(payload);

    this.userId = payload.userId;
    this.token = payload.token;
  }

  _verifyPayload(payload) {
    const { userId, token } = payload;

    if (!userId || !token) {
      throw new Error('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof userId !== 'string' || typeof token !== 'string') {
      throw new Error('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

export default CreateUserVerification;
