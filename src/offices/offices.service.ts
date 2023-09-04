import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Office } from './entities/office.entity';
import { CitiesService } from '../cities/cities.service';

@Injectable()
export class OfficesService {
  constructor(@InjectModel(Office) private officeRep: typeof Office) {}

  async create(OfficeDto: CreateOfficeDto) {
    return await this.officeRep.create(OfficeDto);
  }

  findAll() {
    return this.officeRep.findAll();
  }

  findOne(id: number) {
    return this.officeRep.findByPk(id);
  }
  getFreeCity() {
    return this.officeRep.findOne({ where: { cityId: null } });
  }
  getFreeCompany() {
    return this.officeRep.findOne({ where: { companyId: null } });
  }
}
