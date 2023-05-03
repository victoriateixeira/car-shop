import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/CarRoutes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);

app.use(ErrorHandler);
export default app;
