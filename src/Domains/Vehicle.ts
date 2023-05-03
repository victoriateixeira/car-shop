import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(
    { id,
      model,
      year,
      color,
      status,
      buyValue,
    }: IVehicle,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue; 
  }

  getModel() {
    return this.model;
  }

  setModel(model:string) {
    this.model = model;
  }
  getYear() {
    return this.year;
  }

  setYear(year:number) {
    this.year = year;
  }
  getColor() {
    return this.color;
  }

  setColor(color:string) {
    this.color = color;
  }
  getStatus() {
    return this.status;
  }

  setStatus(status:boolean) {
    this.status = status;
  }
  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(buyValue:number) {
    this.buyValue = buyValue;
  }
}

export default Vehicle;