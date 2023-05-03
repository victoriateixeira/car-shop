import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';

describe('Testa as funções de CarService', function () {
  const carInput = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  };

  const carOutput = {
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  };
  const cars = [
    {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      id: '634852326b35b59438fbea31',
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      status: false,
      buyValue: 39,
      doorsQty: 2,
      seatsQty: 5,
    },
  ];
  describe('Rota POST /cars', function () {
    it('Deve criar um novo carro no banco de dados COM SUCESSO', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);
      const service = new CarService();
      const result = await service.createCar(carInput);
  
      expect(result).to.be.deep.equal(carOutput);
    });
  });
  describe('Rota GET /cars', function () {
    it('deve retornar todos os carros COM SUCESSO', async function () {
      sinon.stub(Model, 'find').resolves(cars);
      const service = new CarService();
      const result = await service.getAll();
  
      expect(result).to.be.deep.equal(cars);
    });
  });
  describe('Rota GET /cars:id', function () {
    it('deve lançar um erro quando o ID é inválido', async function () {
      const id = 'ID_INVALIDO';

      sinon.stub(Model, 'findById').resolves({});

      try {
        const service = new CarService();
        await service.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('deve lançar um erro quando o ID é inexistente', async function () {
      const id = '634852326b35b59438fbea2f';
    
      sinon.stub(Model, 'findById').resolves(null);

      try {
        const service = new CarService();
        await service.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
    it('deve retornar o carro buscado COM SUCESSO', async function () {
      const id = '6348513f34c397abcad040b2';
 
      sinon.stub(Model, 'findById').resolves(carOutput);
      const service = new CarService();
      const result = await service.getById(id);
      expect(result).to.be.deep.equal(carOutput);
    });
  });
  describe('Rota PUT /cars/:id', function () {
    it('Deve retornar um carro atualizado COM SUCESSO', async function () {
      const id = '6348513f34c397abcad040b2';
      sinon.stub(Model, 'findById').resolves(carOutput);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
      const service = new CarService();
      const result = await service.update(id, carInput);
      expect(result).to.be.deep.equal(carOutput);
    });
    it('Deve lançar um erro se o ID é inválido', async function () {
      const id = 'ID_INVALIDO';

      sinon.stub(Model, 'findByIdAndUpdate').resolves({});

      try {
        const service = new CarService();
        await service.update(id, carInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('Deve lançar um erro se o ID é inexistente ', async function () {
      const id = '6348513f34c397abcad040b2';

      sinon.stub(Model, 'findById').resolves(null);

      try {
        const service = new CarService();
        await service.update(id, carInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});
