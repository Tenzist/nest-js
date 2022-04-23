import { Table, HasMany, Column, Model, DataType } from 'sequelize-typescript';
import { Office } from '../../offices/entities/office.entity';

interface CityCreationAttr {
  name: string;
}
@Table
export class City extends Model<City, CityCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
  @HasMany(() => Office)
  offices: Office[];
}
