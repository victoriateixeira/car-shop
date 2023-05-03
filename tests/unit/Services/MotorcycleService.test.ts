import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testa as funções de MotorcycleService', function () {
  const motoInput = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  const motoOutput = {
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };
  const motos = [
    {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    },
    motoOutput,
  ];
  describe('Rota POST /motorcycles', function () {
    it('Deve criar uma nova no banco de dados com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(motoOutput);
      const service = new MotorcycleService();
      const result = await service.createMotorcycle(motoInput);
  
      expect(result).to.be.deep.equal(motoOutput);
    });
  });
  describe('Rota GET /motorcycles', function () {
    it('deve retornar todas as motos COM SUCESSO', async function () {
      sinon.stub(Model, 'find').resolves(motos);
      const service = new MotorcycleService();
      const result = await service.getAll();
  
      expect(result).to.be.deep.equal(motos);
    });
  });
  describe('Rota GET /motorcycles/:id', function () {
    it('deve lançar um erro quando o ID é inválido', async function () {
      const id = 'ID_INVALIDO';

      sinon.stub(Model, 'findById').resolves({});

      try {
        const service = new MotorcycleService();
        await service.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('deve lançar um erro quando o ID é inexistente', async function () {
      const id = '634852326b35b59438fbea2f';

      sinon.stub(Model, 'findById').resolves(null);

      try {
        const service = new MotorcycleService();
        await service.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });
    it('deve retornar a moto buscada COM SUCESSO', async function () {
      const id = '6348513f34c397abcad040b2';
    
      sinon.stub(Model, 'findById').resolves(motoOutput);
      const service = new MotorcycleService();
      const result = await service.getById(id);
      expect(result).to.be.deep.equal(motoOutput);
    });
  });

  describe('Rota PUT /motorcycles/:id', function () {
    it('Rota PUT /motorcycles/:id', async function () {
      const id = '6348513f34c397abcad040b2';
 
      sinon.stub(Model, 'findById').resolves(motoOutput);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motoOutput);
      const service = new MotorcycleService();
      const result = await service.update(id, motoInput);
      expect(result).to.be.deep.equal(motoOutput);
    });
    it('Deve lançar um erro se o ID é inválido', async function () {
      const id = 'ID_INVALIDO';
  
      sinon.stub(Model, 'findByIdAndUpdate').resolves({});

      try {
        const service = new MotorcycleService();
        await service.update(id, motoInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('Deve lançar um erro se o ID é inexistente ', async function () {
      const id = '634852326b35b59438fbea2f';
  
      sinon.stub(Model, 'findById').resolves(null);

      try {
        const service = new MotorcycleService();
        await service.update(id, motoInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});
