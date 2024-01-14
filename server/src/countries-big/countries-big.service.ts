import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import {
  CountriesBig,
  CountriesBigDocument,
} from './schemas/countries-big.schema';
import { Model } from 'mongoose';

@Injectable()
export class CountriesBigService {
  constructor(
    @InjectModel(CountriesBig.name)
    private readonly model: Model<CountriesBigDocument>,
  ) {}

  async findAll(): Promise<CountriesBig[]> {
    return await this.model.find().exec();
  }
}
