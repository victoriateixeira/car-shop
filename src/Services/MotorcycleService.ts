import Motorcycle from '../Domains/Motorcycle';
import NotFoundError from '../Errors/NotFoundError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async getAll(): Promise<(Motorcycle | null)[]> {
    const motorcycleODM = new MotorcycleODM();
    const motos = await motorcycleODM.getAll();
    const motosArray = motos.map((moto) => this.createMotorcycleDomain(moto));

    return motosArray;
  }
  async getById(id: string): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const moto = await motorcycleODM.getById(id);
    if (moto === null) throw new NotFoundError('Motorcycle not found');
    return this.createMotorcycleDomain(moto as IMotorcycle);
  }

  async update(id: string, motorcycle: IMotorcycle): Promise <Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    await this.getById(id);
    const updatedCar = await motorcycleODM.update(id, motorcycle);
    return this.createMotorcycleDomain(updatedCar as IMotorcycle);
  }
}

export default MotorcycleService;