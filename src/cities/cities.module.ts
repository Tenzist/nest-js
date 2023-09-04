import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './entities/city.entity';
import { Office } from '../offices/entities/office.entity';
import { OfficesModule } from '../offices/offices.module';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [SequelizeModule.forFeature([City, Office]), OfficesModule],
})
export class CitiesModule {}
