class NewAuth {
    constructor(payload) {
        this._verifyPayload(payload);

        this.accessToken = payload.accessToken;
    }

    _verifyPayload(payload) {
        const { accessToken } = payload;

        if (!accessToken) {
            throw new Error('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
        }

        if (typeof accessToken !== 'string') {
            throw new Error('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
        }
    }
}

export default NewAuth;