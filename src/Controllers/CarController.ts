import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next:NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async createCar() {
    const car: ICar = this.req.body;
    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  async getAll() {
    try {
      const cars = await this.service.getAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  async getById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  async update() {
    const { id } = this.req.params;
    const car = this.req.body; 
    try {
      const updatedCar = await this.service.update(id, car);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;