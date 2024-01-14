import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  _id?: string;

  @Prop()
  title?: string;

  @Prop()
  isbn?: string;

  @Prop()
  pageCount?: number;

  @Prop()
  publishedDate?: Date;

  @Prop()
  thumbnailUrl?: string;

  @Prop()
  shortDescription?: string;

  @Prop()
  longDescription?: string;

  @Prop()
  status?: string;

  @Prop()
  authors?: string[];

  @Prop()
  categories?: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
