import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee) private employeeRep: typeof Employee) {}
  create(employeeDto: CreateEmployeeDto) {
    return this.employeeRep.create(employeeDto);
  }

  findAll() {
    return this.employeeRep.findAll();
  }

  findOne(id: number) {
    return this.employeeRep.findByPk(id);
  }
}
