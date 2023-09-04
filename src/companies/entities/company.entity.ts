import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Office } from '../../offices/entities/office.entity';

interface CompanyCreationAttr {
  name: string;
}

@Table
export class Company extends Model<Company, CompanyCreationAttr> {
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
