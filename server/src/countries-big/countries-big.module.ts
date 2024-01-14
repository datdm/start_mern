import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CountriesBigService } from './countries-big.service';
import { CountriesBigController } from './countries-big.controller';
import {
  CountriesBig,
  CountriesBigSchema,
} from './schemas/countries-big.schema';

@Module({
  controllers: [CountriesBigController],
  providers: [CountriesBigService],
  imports: [
    MongooseModule.forFeature([
      { name: CountriesBig.name, schema: CountriesBigSchema },
    ]),
  ],
})
export class CountriesBigModule {}
