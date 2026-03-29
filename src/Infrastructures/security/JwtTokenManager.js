import AuthenticationTokenManager from '../../Applications/security/AuthenticationTokenManager.js';
import config from '../../Commons/config.js';

class JwtTokenManager extends AuthenticationTokenManager {
    constructor(jwt) {
        super();
        this._jwt = jwt;
    }

    async createAccessToken(payload) {
        return this._jwt.sign(payload, config.auth.accessTokenKey);
    }

    async decodePayload(token) {
        const payload = this._jwt.decode(token);
        return payload;
    }
}

export default JwtTokenManager;