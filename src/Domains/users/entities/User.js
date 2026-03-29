class User {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, email } = payload;

    this.id = id;
    this.email = email;
  }

  _verifyPayload({ id, email }) {
    if (!id || !email) {
      throw new Error('USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof email !== 'string') {
      throw new Error('USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

export default User;
