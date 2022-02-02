import { Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Plant } from "./entities/plant.entity";
import { Section } from 'src/sections/entities/section.entity';
import { SectionsController } from 'src/sections/sections.controller';
import { SectionsService } from 'src/sections/sections.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plant, Section])],
  controllers: [PlantsController, SectionsController],
  providers: [PlantsService, SectionsService]
})
export class PlantsModule { }
