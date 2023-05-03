import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
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
    super(
      { id,
        model,
        year,
        color,
        status,
        buyValue },
    );
    this.doorsQty = doorsQty; 
    this.seatsQty = seatsQty; 
  }
  
  getDoorsrQty() {
    return this.doorsQty;
  }

  setDoorsQty(doorsQty:number) {
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