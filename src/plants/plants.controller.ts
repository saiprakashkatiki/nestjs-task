import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlant } from './create-plant.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('plant')
@Controller('plants')
export class PlantsController {
    constructor( private readonly plantsService: PlantsService) {}

    @Get()
    async getPlants() {
        const plants = await this.plantsService.getPlants();
        return plants;
    }


    @Get(':plantId')
    async getPlant(@Param('plantId') plantId) {
        const plant = await this.plantsService.getPlant(plantId);
        return plant;
    }


    @Post()
    async savePlant(@Body() createPlant: CreatePlant ) {
        const plant = await this.plantsService.savePlant(createPlant);
        console.log('Successfully Saved');
    }
}
