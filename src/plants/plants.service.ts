import { Injectable, HttpStatus } from '@nestjs/common';
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

    async getPlantByPlantCode(plantCode: string): Promise<PlantsDTO> {
        return await this.plantsRepository.findOne({
            where: {
                plantCode: plantCode,
            },
        });
        
    }

    async savePlant(data: PlantsDTO) {
        const plant = this.plantsRepository.create(data);
        await this.plantsRepository.save(data);
        return plant;
           
    }

    async deletePlant(plantCode: string) {
       await this.plantsRepository.delete({ plantCode });
       return { deleted: true};
    }
}
