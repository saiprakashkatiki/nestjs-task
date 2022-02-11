import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { PlantsService } from 'src/plants/plants.service';
import { Plant } from 'src/plants/entities/plant.entity';
import { PlantsController } from 'src/plants/plants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Section, Plant])],
  providers: [SectionsService, PlantsService],
  controllers: [SectionsController, PlantsController]
})
export class SectionsModule { }
