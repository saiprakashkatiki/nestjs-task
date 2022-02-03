import { Body, ConflictException, Controller, Delete, Get, NotFoundException, NotImplementedException, Param, Patch, Post} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { ApiTags } from '@nestjs/swagger';
import { SectionsDTO } from './dtos/section.dto';
import { UpdateSectionsDTO } from './dtos/edit-section.dto';

@ApiTags('sections')
@Controller('sections')
export class SectionsController {
    constructor(private sectionsService: SectionsService) { }

    @Get()
    async getAllSections() {
        try {
            const sections = await this.sectionsService.getAllSections();
            return {
                status: true,
                message: 'Sections fetched successfully',
                sections
            };
        } catch (error) {
            throw new NotImplementedException({
                status: false,
                message: 'Method not Implemented'
            });
        }
    }

    @Get(':sectionCode')
    async getSectionBySectionCode(@Param('sectionCode') sectionCode: string) {
        try {
            const section = await this.sectionsService.getSectionBySectionCode(sectionCode);
            return {
                status: true,
                message: 'Section fetched successfully',
                section,
            };
        } catch (error) {
            throw new NotFoundException({
                status: false,
                message: 'Section Not Found'
            });
        }
    }

    @Post()
    async saveSection(@Body() data: SectionsDTO) {
        try {
            const savedSection = await this.sectionsService.saveSection(data);
            return {
                status: true,
                message: 'Section saved successfully',
                savedSection,
            };
        } catch (error) {
            throw new ConflictException({
                status: false,
                message: 'Section already exists or Plant doesnt exist'
            });
        }
    }

    @Patch('edit/:sectionCode')
    async editSection(
        @Param('sectionCode') sectionCode: string,
        @Body() updateSectionsDTO: UpdateSectionsDTO
    ) {
        try {
            await this.sectionsService.editSection(sectionCode, updateSectionsDTO);
            return {
                status: true,
                message: 'Section edited successfully'
            };
        } catch (error) {
            throw new NotFoundException({
                status: false,
                message: 'Section Not Found'
            });
        }
    }

    @Delete('/delete/:sectionCode')
    async deleteSection(@Param('sectionCode') sectionCode: string) {
        try {
            await this.sectionsService.deleteSection(sectionCode);
            return {
                status: true,
                message: 'Section deleted successfully',
            };
        } catch (error) {
            throw new NotFoundException({
                status: false,
                message: 'Section Not Found'
            });
        }
    }

}