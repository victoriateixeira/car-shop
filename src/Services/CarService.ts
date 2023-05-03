import Car from '../Domains/Car';
import NotFoundError from '../Errors/NotFoundError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  async getAll(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const carsArray = cars.map((car) => this.createCarDomain(car));

    return carsArray;
  }
  async getById(id: string): Promise<Car | null> {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    if (car === null) throw new NotFoundError('Car not found');
    return this.createCarDomain(car as ICar);
  }

  async update(id: string, car: ICar): Promise <Car | null> {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);
    return this.createCarDomain(updatedCar as ICar);
  }
}

export default CarService;