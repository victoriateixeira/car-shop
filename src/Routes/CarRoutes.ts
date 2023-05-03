import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/', 
  (req, res, next) => new CarController(req, res, next).createCar(),
);
carRoutes.get(
  '/', 
  (req, res, next) => new CarController(req, res, next).getAll(),
);

export default carRoutes;