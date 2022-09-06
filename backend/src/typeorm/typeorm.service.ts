import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'mysql',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      autoLoadEntities: true,
      synchronize: false,
      connectTimeout: 15000,
      entities: [__dirname + '/**/typeorm/entity/*.entity.{ts,js}'],
      migrations: [`${__dirname}/typeorm/migration/*.{ts,js}`],
    };
  }

  async clearDb(dataSource: DataSource) {
    const entities = dataSource.entityMetadatas;

    for (const entity of entities) {
      if (entity.name === 'migrations') {
        continue;
      }
      const repository = await dataSource.getRepository(entity.name);
      await repository.query(`TRUNCATE TABLE "${entity.tableName}" CASCADE;`);
    }
  }
}
