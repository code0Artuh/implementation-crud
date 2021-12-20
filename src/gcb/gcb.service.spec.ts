import { Test, TestingModule } from '@nestjs/testing';
import { GcbService } from './gcb.service';

describe('GcbService', () => {
  let service: GcbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GcbService],
    }).compile();

    service = module.get<GcbService>(GcbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
