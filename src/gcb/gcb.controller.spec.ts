import { Test, TestingModule } from '@nestjs/testing';
import { GcbController } from './gcb.controller';

describe('GcbController', () => {
  let controller: GcbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GcbController],
    }).compile();

    controller = module.get<GcbController>(GcbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
