import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SectionsService } from 'src/sections/sections.service';
import { Repository } from 'typeorm';
import { Plant } from './entities/plant.entity';
import { PlantsDTO, UpdatePlantsDTO, StatusPlantDTO } from './plant.dto';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantsRepository: Repository<Plant>,

    @Inject(forwardRef(() => SectionsService))
    private sectionsService: SectionsService,
  ) { }

  async getAllPlants() {
    return await this.plantsRepository.find();
  }

  async getPlantByPlantCode(plantCode: string) {
    const plant = await this.plantsRepository.findOne({
      where: {
        plantCode: plantCode,
      },
    });
    if (!plant) {
      throw new NotFoundException('Plant not found');
    }
    return plant;
  }

  async savePlant(data: PlantsDTO) {
    const plant = this.plantsRepository.create(data);
    await this.plantsRepository.save(data);
    return plant;
  }

  async activateOrDeactivatePlantByPlantCode(
    plantCode: string,
    data: StatusPlantDTO,
  ) {
    const plant = await this.plantsRepository.findOne({
      where: {
        plantCode: plantCode,
      },
    });
    if (!plant) {
      throw new NotFoundException('Plant not found');
    }
    await this.plantsRepository.update({ plantCode }, data);
    return await this.plantsRepository.findOne({ plantCode });
  }

  async editPlant(plantCode: string, data: UpdatePlantsDTO) {
    const editedPlant = await this.plantsRepository.findOne({
      where: {
        plantCode: plantCode,
      },
    });
    if (!editedPlant) {
      throw new NotFoundException('Plant doesnt exist');
    }
    await this.plantsRepository.update({ plantCode }, data);
    return await this.plantsRepository.findOne({ plantCode });
  }

  async deletePlant(plantCode: string) {
    const plant = await this.plantsRepository.findOne({
      where: {
        plantCode: plantCode,
      },
    });
    if (!plant) {
      throw new NotFoundException('Plant not found');
    }
    await this.plantsRepository.delete({ plantCode });
    return { deleted: true };
  }
}
