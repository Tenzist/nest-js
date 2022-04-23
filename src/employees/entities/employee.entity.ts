import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface EmployeeCreationAttr {
  name: string;
}

@Table
export class Employee extends Model<Employee, EmployeeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
