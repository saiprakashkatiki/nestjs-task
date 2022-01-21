import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlantsEntity } from "./entities/plant.entity";
import { PlantsDTO } from './plant.dto';

@Injectable()
export class PlantsService {
    constructor(
        @InjectRepository(PlantsEntity)
        private readonly plantsRepository: Repository<PlantsEntity>
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

    async deletePlant(plantCode: string) {
       const plant = await this.plantsRepository.delete({ plantCode });
    }
}
