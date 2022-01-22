import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { ApiTags } from '@nestjs/swagger';
import { PlantsDTO, StatusPlantDTO, UpdatePlantsDTO } from './plant.dto';

@ApiTags('plants')
@Controller('plants')
export class PlantsController {
    constructor(private plantsService: PlantsService) { }

    @Get()
    async getAllPlants() {
        try {
            const plants = await this.plantsService.getAllPlants();
            return {
                statusCode: true,
                message: 'Plants fetched successfully',
                plants
            };
        } catch (error) {  }
    }

    @Get(':plantCode')
    async getPlantByPlantCode(@Param('plantCode') plantCode: string) {
        try {
            const plant = await this.plantsService.getPlantByPlantCode(plantCode);
            return {
                statusCode: true,
                message: 'Plant fetched successfully',
                plant,
            };
        } catch (error) { }
    }

    @Post()
    async savePlant(@Body() data: PlantsDTO) {
        try {
            const plant = await this.plantsService.savePlant(data);
            return {
                statusCode: true,
                message: 'Plant saved successfully',
                plant,
            };
        } catch (error) { }
    }

    @Post(':plantCode')
    async activateOrDeactivatePlantByPlantCode(
        @Param('plantCode') plantCode: string,
        @Body() data: StatusPlantDTO,
    ) {
        try {
            await this.plantsService.activateOrDeactivatePlantByPlantCode(plantCode, data);
            return {
                statusCode: true,
                message: 'Plant status updated successfully',
            };
        } catch (error) { }
    }

    @Patch('edit/:plantCode')
    async editPlant(
        @Param('plantCode') plantCode: string,
        @Body() data: UpdatePlantsDTO
    ) {
        try {
            await this.plantsService.editPlant(plantCode, data);
            return {
                statusCode: true,
                message: 'Plant edited successfully'
            };
        } catch (error) { }
    }

    @Delete('/delete/:plantCode')
    async deletePlant(@Param('plantCode') plantCode: string) {
        try {
            await this.plantsService.deletePlant(plantCode);
            return {
                statusCode: true,
                message: 'Plant deleted successfully',
            };
        } catch (error) { }
    }

}
