import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { CitiesModule } from './cities/cities.module';
import { OfficesModule } from './offices/offices.module';
import { EmployeesModule } from './employees/employees.module';
import { City } from './cities/entities/city.entity';
import { Company } from './companies/entities/company.entity';
import { Employee } from './employees/entities/employee.entity';
import { Office } from './offices/entities/office.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      models: [City, Company, Employee, Office],
    }),
    CompaniesModule,
    CitiesModule,
    OfficesModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
