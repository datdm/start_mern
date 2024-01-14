export class BookDto {
  _id?: string;
  title?: string;
  isbn?: string;
  pageCount?: number;
  publishedDate?: Date;
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  status?: string;
  authors?: string[];
  categories?: string[];
}
