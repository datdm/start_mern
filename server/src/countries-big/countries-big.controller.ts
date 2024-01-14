import { Controller, Get } from '@nestjs/common';
import { CountriesBigService } from './countries-big.service';

@Controller('countries-big')
export class CountriesBigController {
  constructor(private readonly countriesBigService: CountriesBigService) {}

  @Get()
  findAll() {
    return this.countriesBigService.findAll();
  }
}
