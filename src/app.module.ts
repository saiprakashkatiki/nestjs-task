import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantsEntity } from './plants/entities/plant.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pms',
      entities: [PlantsEntity],
      synchronize: false,
      logging: true
    }), PlantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
