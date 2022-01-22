import { Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlantsEntity } from "./entities/plant.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PlantsEntity])],
  controllers: [PlantsController],
  providers: [PlantsService]
})
export class PlantsModule { }
