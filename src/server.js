import express from 'express';
import routes from './routes/index.js';
import ErrorHandler from './middlewares/error-handler.js';

const app = express();
const port = 3000;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});