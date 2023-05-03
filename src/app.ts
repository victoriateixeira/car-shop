import express from 'express';

import carRoutes from './Routes/CarRoutes';
import errorMiddleware from './Middlewares/ErrorMiddleware';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);

app.use(errorMiddleware);
export default app;
