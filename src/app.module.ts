import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './plants/entities/plant.entity';
import { Section } from './sections/entities/section.entity';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pms',
      entities: [Plant,Section],
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }), PlantsModule, SectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
