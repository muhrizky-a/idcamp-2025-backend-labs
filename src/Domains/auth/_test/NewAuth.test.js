import { describe, expect, it } from 'vitest';
import NewAuth from '../NewAuth.js';

describe('NewAuth entities', () => {
    it('should throw error when payload not contain needed property', () => {
        // Arrange
        const payload = {};

        // Action & Assert
        expect(() => new NewAuth(payload)).toThrowError('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload not meet data type specification', () => {
        // Arrange
        const payload = {
            accessToken: 1234,
        };

        // Action & Assert
        expect(() => new NewAuth(payload)).toThrowError('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should create NewAuth entities correctly', () => {
        // Arrange
        const payload = {
            accessToken: 'accessToken',
        };

        // Action
        const newAuth = new NewAuth(payload);

        // Assert
        expect(newAuth).toBeInstanceOf(NewAuth);
        expect(newAuth.accessToken).toEqual(payload.accessToken);
    });
});