class UserLogin {
  constructor(payload) {
    this._verifyPayload(payload);

    this.email = payload.email;
    this.token = payload.token;
  }

  _verifyPayload(payload) {
    const { email, token } = payload;

    if (!email || !token) {
      throw new Error('USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof email !== 'string' || typeof token !== 'string') {
      throw new Error('USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

export default UserLogin;
