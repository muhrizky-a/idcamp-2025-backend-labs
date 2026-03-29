class RegisterUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { email } = payload;

    this.email = email;
  }

  _verifyPayload({ email }) {
    if (!email) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof email !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      throw new Error('REGISTER_USER.EMAIL_NOT_VALID');
    }
  }
}

export default RegisterUser;
