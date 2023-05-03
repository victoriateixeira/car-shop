import IAuto from './IAuto';

interface ICar extends IAuto {
  doorsQty: number;
  seatsQty: number;
}

export default ICar;