import routes from './routes.js';
import AuthController from './controller.js';

const auth = (container) => {
  const authController = new AuthController(container);

  return routes(authController);
};

export default auth;
