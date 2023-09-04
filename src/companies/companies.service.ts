import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './entities/company.entity';
import { OfficesService } from '../offices/offices.service';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company) private companyRep: typeof Company,
    private officeSer: OfficesService,
  ) {}

  async create(companyDto: CreateCompanyDto) {
    const company = await this.companyRep.create(companyDto);
    const office = await this.officeSer.getFreeCompany();
    if (office !== null) {
      await company.$set('offices', [office.id]);
      return company;
    } else {
      return 'Company created without office\n' + company;
    }
  }

  findAll() {
    return this.companyRep.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.companyRep.findByPk(id);
  }
}
