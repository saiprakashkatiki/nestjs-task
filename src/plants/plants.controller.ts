import { Body, ConflictException, Controller, Delete, Get, HttpStatus, NotFoundException, NotImplementedException, Param, Patch, Post, Put } from '@nestjs/common';
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
                status: true,
                message: 'Plants fetched successfully',
                plants
            };
        } catch (error) {
            throw new NotImplementedException({
                status: false,
                message: 'Method not Implemented'
            });
        }
    }

    @Get(':plantCode')
    async getPlantByPlantCode(@Param('plantCode') plantCode: string) {
        try {
            const plant = await this.plantsService.getPlantByPlantCode(plantCode);
            return {
                status: true,
                message: 'Plant fetched successfully',
                plant,
            };
        } catch (error) {
            throw new NotFoundException({
                status: false,
                message: 'Plant Not Found'
            });
        }
    }

    @Post()
    async savePlant(@Body() data: PlantsDTO) {
        try {
            const plant = await this.plantsService.savePlant(data);
            return {
                status: true,
                message: 'Plant saved successfully',
                plant,
            };
        } catch (error) {
            throw new ConflictException({
                status: false,
                message: 'Plant already exists'
            });
        }
    }

    @Post(':plantCode')
    async activateOrDeactivatePlantByPlantCode(
        @Param('plantCode') plantCode: string,
        @Body() data: StatusPlantDTO,
    ) {
        try {
            await this.plantsService.activateOrDeactivatePlantByPlantCode(plantCode, data);
            return {
                status: true,
                message: 'Plant status updated successfully',
            };
        } catch (error) {
            throw new ConflictException({
                status: false,
                message: 'Only boolean value true or false is accepted'
            });
        }
    }

    @Patch('edit/:plantCode')
    async editPlant(
        @Param('plantCode') plantCode: string,
        @Body() data: UpdatePlantsDTO
    ) {
        try {
            await this.plantsService.editPlant(plantCode, data);
            return {
                status: true,
                message: 'Plant edited successfully'
            };
        } catch (error) {
            throw new NotFoundException({
                status: false,
                message: 'Plant Not Found'
            });
        }
    }

    @Delete('/delete/:plantCode')
    async deletePlant(@Param('plantCode') plantCode: string) {
        try {
            await this.plantsService.deletePlant(plantCode);
            return {
                status: true,
                message: 'Plant deleted successfully',
            };
        } catch (error) {
            throw new NotFoundException({
                status: false,
                message: 'Plant Not Found'
            });
        }
    }

}
