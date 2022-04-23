import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './entities/city.entity';
import { OfficesService } from '../offices/offices.service';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City) private cityRep: typeof City,
    private officeSer: OfficesService,
  ) {}
  async create(cityDto: CreateCityDto) {
    const city = await this.cityRep.create(cityDto);
    const office = await this.officeSer.getFreeCity();
    if (office !== null) {
      await city.$set('offices', [office.id]);
      return city;
    } else {
      return 'City created without office\n' + city;
    }
  }

  findAll() {
    return this.cityRep.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.cityRep.findByPk(id);
  }
}
