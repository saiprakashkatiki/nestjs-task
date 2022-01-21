import { Body, Controller, Delete, Get, HttpStatus, Param, Post,Put } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { ApiTags } from '@nestjs/swagger';
import { PlantsEntity } from "./entities/plant.entity";
import { PlantsDTO } from './plant.dto';

@ApiTags('plants')
@Controller('plants')
export class PlantsController {
    constructor( private plantsService: PlantsService) {}

    @Get()
    async getAllPlants() {
        const plants = await this.plantsService.getAllPlants();
        return {
            statusCode: HttpStatus.OK,
            message: 'Plants fetched successfully',
            plants
        };
    }

    @Get(':plantCode')
    async getPlantByPlantCode(@Param('plantCode') plantCode: string) {
            const plant = await this.plantsService.getPlantByPlantCode(plantCode);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant fetched successfully',
                plant,
            };
    }

    @Post()
    async savePlant(@Body() data: PlantsDTO) {
        const plant = await this.plantsService.savePlant(data);
        return {
            statusCode: HttpStatus.OK,
            message: 'Plant created successfully',
            plant,
        };
    }

    @Post(':plantCode')
    async activateOrDeactivatePlantByPlantCode(
        @Param('plantCode') plantCode: string,
        @Body('isActive') isActive: boolean,
        ){
            await this.plantsService.activateOrDeactivatePlantByPlantCode(plantCode,isActive);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant status updated successfully',
            };
        }

    @Delete(':plantCode')
    async deletePlant(@Param('plantCode') plantCode: string) {
       await this.plantsService.deletePlant(plantCode);
        return {
            statusCode: HttpStatus.OK,
            message: 'Plant deleted successfully',
        };
    }
    
}
