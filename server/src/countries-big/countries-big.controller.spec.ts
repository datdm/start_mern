import { Test, TestingModule } from '@nestjs/testing';
import { CountriesBigController } from './countries-big.controller';
import { CountriesBigService } from './countries-big.service';

describe('CountriesBigController', () => {
  let controller: CountriesBigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesBigController],
      providers: [CountriesBigService],
    }).compile();

    controller = module.get<CountriesBigController>(CountriesBigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
