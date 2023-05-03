import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';

describe('Testa as funções de CarService', function () {
  describe('Deve criar um registro de um carro no banco de dados COM SUCESSO', function () {
    it('Deve criar um novo carro no banco de dados com sucesso', function () {
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
    
      sinon.stub(Model, 'create').resolves(carOutput);
      const service = new CarService();
      const result = service.createCar(carInput);
  
      expect(result).to.be.deep.equal(carOutput);
    });
  });
  describe('Deve retornar todos os carros registrados no db', function () {
    it('deve retornar todos os carros COM SUCESSO', async function () {
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
          buyValue: 39,
          doorsQty: 2,
          seatsQty: 5,
        },
      ];
    
      sinon.stub(Model, 'find').resolves(cars);
      const service = new CarService();
      const result = await service.getAll();
  
      expect(result).to.be.deep.equal(cars);
    });
  });
  describe('Deve retornar um carro específico quando buscado pelo seu ID', function () {
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
    it('deve lançar um erro quando o ID não é encontrado', async function () {
      const id = 'NOT_FOUND_ID';

      sinon.stub(Model, 'findById').resolves(null);

      try {
        const service = new CarService();
        await service.getById(id);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
    it('deve retornar o carro buscado com sucesso', async function () {
      const id = 'VALID_ID';
      const carOutput = {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      };
      sinon.stub(Model, 'findById').resolves(null);
      const service = new CarService();
      const result = await service.getById(id);
      expect(result).to.be.deep.equal(carOutput);
    });
  });
});
