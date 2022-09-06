import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from 'typeorm/typeorm.service';
import { AuthModule } from 'auth/auth.module';
import { ControllerModule } from 'controllers/controller.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
      inject: [TypeOrmService],
    }),
    AuthModule,
    ControllerModule,
  ],
})
export class AppModule {}
