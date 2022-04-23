import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './entities/company.entity';
import { Office } from '../offices/entities/office.entity';
import { OfficesModule } from '../offices/offices.module';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [SequelizeModule.forFeature([Company, Office]), OfficesModule],
})
export class CompaniesModule {}
