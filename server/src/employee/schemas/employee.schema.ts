import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({
  collection: 'employees',
})
export class Employee {}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
