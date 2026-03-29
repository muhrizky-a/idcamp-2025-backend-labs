import express from 'express';

const routes = (controller) => {
  const router = express.Router();

  router.post('/', controller.postAuth);
  router.post('/verify', controller.verifyAuth);

  return router;
};

export default routes;
