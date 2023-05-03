import express from 'express';

import carRoutes from './Routes/CarRoutes';
import errorMiddleware from './Middlewares/ErrorMiddleware';
import motorcycleRoutes from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);

app.use(errorMiddleware);
export default app;
