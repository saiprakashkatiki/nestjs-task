import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlantsEntity } from "./entities/plant.entity";
import { PlantsDTO } from './plant.dto';
//import { PlantRepository } from './plant.repository';

@Injectable()
export class PlantsService {
    constructor(
        @InjectRepository(PlantsEntity)
        private readonly plantsRepository: Repository<PlantsEntity>,
    ){}

   async getAllPlants() {
        return await this.plantsRepository.find();
    }

    async getPlantByPlantCode(plantCode: string) {
        const plant = await this.plantsRepository.findOne({
            where: {
                plantCode: plantCode,
            }
        });
        if(!plant){
            throw new NotFoundException('Plant not found');
        }
        return plant; 
    }

    async savePlant(data: PlantsDTO) {
        const plant = this.plantsRepository.create(data);
        await this.plantsRepository.save(data);
        return plant;           
    }

    async activateOrDeactivatePlantByPlantCode(plantCode: string, data ) {
        return await this.plantsRepository.update(plantCode,data);
    }

    async editPlant(plantCode:string, plantsDTO: PlantsDTO) {
        const editedPlant = await this.plantsRepository.findOne(plantCode);
        if(!editedPlant) {
            throw new NotFoundException('Plant not found');
        }
        return this.plantsRepository.update(plantsDTO, editedPlant);
    }

    async deletePlant(plantCode: string) {
       const plant = await this.plantsRepository.findOne({
            where: {
                plantCode: plantCode,
            }
        });
       if(!plant){
            throw new NotFoundException('Plant not found');
       }
       await this.plantsRepository.delete({plantCode});
       return { deleted: true };
    }
}
