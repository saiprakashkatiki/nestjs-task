import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { CreatePlantDto } from './create-plant.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Plant } from './plant.dto';

@ApiTags('plants')
@Controller('plants')
export class PlantsController {
    constructor( private readonly plantsService: PlantsService) {}

    @Get()
    async getAllPlants() {
        const plants = await this.plantsService.getAllPlants();
        return plants;
    }


    @Get(':plantCode')
    async getPlant(@Param('plantCode') plantCode:string) {
        const plant = await this.plantsService.getPlant(plantCode);
        return plant;
    }


    @Post()
    @ApiResponse({ status: 201, 
        description: 'The plant has been successfully created.',
        type: Plant,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async savePlant(@Body() createPlantDto: CreatePlantDto ) {
        this.plantsService.savePlant(createPlantDto);
        console.log('Successfully Saved');
    }

    /*
    @Delete()
    async deletePlant(@Query() query) {
        const plants = await this.plantsService.deletePlant(query.plantCode);
        return plants;
    }
    */
}
