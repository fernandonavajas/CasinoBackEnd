import { Test, TestingModule } from '@nestjs/testing';
import { CartaController } from './carta.controller';

describe('Carta Controller', () => {
  let controller: CartaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartaController],
    }).compile();

    controller = module.get<CartaController>(CartaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
