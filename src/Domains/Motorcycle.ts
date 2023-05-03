import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(
    { id,
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity }: IMotorcycle,
  ) {
    super(
      { id,
        model,
        year,
        color,
        status,
        buyValue },
    );
    this.category = category; 
    this.engineCapacity = engineCapacity; 
  }
  
  getCategory() {
    return this.category;
  }

  setCategory(category:string) {
    this.category = category;
  }
  getEngineCapacity() {
    return this.engineCapacity;
  }

  setEngineCapacity(engineCapacity:number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;