import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsModule } from './plants/plants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './plants/entities/plant.entity';
import { Section } from './sections/entities/section.entity';
import { SectionsModule } from './sections/sections.module';
import { LoggerModule } from 'nestjs-pino';
import { SectionAttributes } from './section-attributes/section-attributes.entity';
import { SectionAttributesModule } from './section-attributes/section-attributes.module';

@Module({
  imports: [
    LoggerModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pms',
      entities: [Plant, Section, SectionAttributes],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    PlantsModule,
    SectionsModule,
    SectionAttributesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
