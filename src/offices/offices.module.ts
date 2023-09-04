import { Module } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { OfficesController } from './offices.controller';
import { Office } from './entities/office.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [OfficesController],
  providers: [OfficesService],
  imports: [SequelizeModule.forFeature([Office])],
  exports: [OfficesService],
})
export class OfficesModule {}
