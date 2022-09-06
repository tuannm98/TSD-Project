import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormconfig: MysqlConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3308,
  username: process.env.DB_USERNAME ?? 'admin',
  password: process.env.DB_PASSWORD ?? 'admin',
  database: process.env.DB_DATABASE ?? 'tsd_db',
  synchronize: false,
  logging: false,
  entities: ['src/typeorm/entity/*.entity.{ts,js}'],
  migrations: ['src/typeorm/migration/*.{ts,js}'],
};

export const AppDataSource = new DataSource(ormconfig);
