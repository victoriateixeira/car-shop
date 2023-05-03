import { Model, Schema, model, models, isValidObjectId } from 'mongoose';

import ICar from '../Interfaces/ICar';

import BadRequestError from '../Errors/BadRequestError';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise <ICar | null> {
    if (!isValidObjectId(id)) throw new BadRequestError('Invalid mongo id');
    const car = this.model.findById(id);
    // if (!car) throw new NotFoundError('Car not found');
    return car;
  }
}
export default CarODM;