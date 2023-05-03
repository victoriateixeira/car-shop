import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle{
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: string
}

export default IMotorcycle;