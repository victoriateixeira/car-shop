import IAuto from './IAuto';

interface IMotorcycle extends IAuto{
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: string
}

export default IMotorcycle;