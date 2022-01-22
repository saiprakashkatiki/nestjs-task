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
                statusCode: HttpStatus.OK,
                message: 'Plants fetched successfully',
                plants
            };
        } catch (err) { }
    }

    @Get(':plantCode')
    async getPlantByPlantCode(@Param('plantCode') plantCode: string) {
        try {
            const plant = await this.plantsService.getPlantByPlantCode(plantCode);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant fetched successfully',
                plant,
            };
        } catch (err) { }
    }

    @Post()
    async savePlant(@Body() data: PlantsDTO) {
        try {
            const plant = await this.plantsService.savePlant(data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant saved successfully',
                plant,
            };
        } catch (err) { }
    }

    @Post(':plantCode')
    async activateOrDeactivatePlantByPlantCode(
        @Param('plantCode') plantCode: string,
        @Body() data: StatusPlantDTO,
    ) {
        try {
            await this.plantsService.activateOrDeactivatePlantByPlantCode(plantCode, data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant status updated successfully',
            };
        } catch (err) { }
    }

    @Patch('edit/:plantCode')
    async editPlant(
        @Param('plantCode') plantCode: string,
        @Body() data: UpdatePlantsDTO
    ) {
        try {
            await this.plantsService.editPlant(plantCode, data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant edited successfully'
            };
        } catch (err) { }
    }

    @Delete('/delete/:plantCode')
    async deletePlant(@Param('plantCode') plantCode: string) {
        try {
            await this.plantsService.deletePlant(plantCode);
            return {
                statusCode: HttpStatus.OK,
                message: 'Plant deleted successfully',
            };
        } catch (err) { }
    }

}
