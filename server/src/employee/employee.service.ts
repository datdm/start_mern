import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly model: Model<EmployeeDocument>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.model.find().exec();
  }
}
