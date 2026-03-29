/* istanbul ignore file */

import { createContainer } from 'instances-container';

// external agency
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import pool from './database/postgres/pool.js';

// service (repository, helper, manager, etc)
import UserRepository from '../Domains/users/UserRepository.js';
import UserRepositoryPostgres from './repository/UserRepositoryPostgres.js';
import UserVerificationRepository from '../Domains/user_verifications/UserVerificationRepository.js';
import UserVerificationRepositoryPostgres from './repository/UserVerificationRepositoryPostgres.js';
import AuthenticationTokenManager from '../Applications/security/AuthenticationTokenManager.js';
import JwtTokenManager from './security/JwtTokenManager.js';

// use case
import AddUserUseCase from '../Applications/use_case/AddUserUseCase.js';
//TODO: import use case

// creating container
const container = createContainer();

//TODO: register services
// registering services and repository
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: UserVerificationRepository.name,
    Class: UserVerificationRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: AuthenticationTokenManager.name,
    Class: JwtTokenManager,
    parameter: {
      dependencies: [
        {
          concrete: jwt,
        },
      ],
    },
  },
]);

// TODO: register use case
// registering use cases
container.register([
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
      ],
    },
  },
]);

export default container;
