import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    { id,
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty }: ICar,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty; 
    this.seatsQty = seatsQty; 
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
  getDoorsrQty() {
    return this.doorsQty;
  }

  setDoorQty(doorsQty:number) {
    this.doorsQty = doorsQty;
  }
  getSeatsrQty() {
    return this.seatsQty;
  }

  setSeatsQty(seatsQty:number) {
    this.seatsQty = seatsQty;
  }
}

export default Car;