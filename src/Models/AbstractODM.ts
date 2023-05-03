import { Model, Schema, models,
  model, isValidObjectId, UpdateQuery } from 'mongoose';
import BadRequestError from '../Errors/BadRequestError';
// import NotFoundError from '../Errors/NotFoundError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise <T | null> {
    if (!isValidObjectId(id)) throw new BadRequestError('Invalid mongo id');
    return this.model.findById(id);
  }

  public async update(id: string, obj: Partial<T>):
  Promise<T | null> {
    // const isId = await this.getById(id);
    // if (isId === null) throw new NotFoundError('Car not found');
    if (!isValidObjectId(id)) throw new BadRequestError('Invalid Mongo id');
    
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );   
  }
}

export default AbstractODM;