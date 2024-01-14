import { Test, TestingModule } from '@nestjs/testing';
import { CountriesBigService } from './countries-big.service';

describe('CountriesBigService', () => {
  let service: CountriesBigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesBigService],
    }).compile();

    service = module.get<CountriesBigService>(CountriesBigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
