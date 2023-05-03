import Car from '../Domains/Car';
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
    return this.createCarDomain(car as ICar);
  }
}

export default CarService;