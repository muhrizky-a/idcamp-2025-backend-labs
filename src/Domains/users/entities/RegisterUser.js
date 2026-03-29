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

    if (!email.match(/^[\w]+$/)) {
      throw new Error('REGISTER_USER.EMAIL_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}

export default RegisterUser;
