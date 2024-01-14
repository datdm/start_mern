import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type CountriesBigDocument = CountriesBig & Document;

@Schema({
  collection: 'countries-big',
})
export class CountriesBig {
  @Prop()
  _id?: string;

  @Prop({ name: 'Country Name' })
  CountryName?: string;

  @Prop()
  Language?: string;
}

export const CountriesBigSchema = SchemaFactory.createForClass(CountriesBig);
