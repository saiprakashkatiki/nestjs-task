import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Section } from './entities/section.entity';
import { SectionsDTO } from './dtos/section.dto';
import { UpdateSectionsDTO } from './dtos/edit-section.dto';
import { PlantsService } from 'src/plants/plants.service';

@Injectable()
export class SectionsService {
    private logger = new Logger('SectionsService');

    constructor(
        @InjectRepository(Section)
        private readonly sectionRepository: Repository<Section>,

        private readonly plantsService: PlantsService,
    ) { }

    async getAllSections() {
        this.logger.verbose('Retriving all sections...');
        return await this.sectionRepository.find();
    }

    async getSectionBySectionCode(sectionCode: string) {
        const section = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!section) {
            this.logger.error('Could not find section with code ' + sectionCode);
            throw new NotFoundException('Section not found');
        }
        this.logger.verbose('Retriving the requested section...');
        return section;
    }

    async saveSection(data: SectionsDTO) {
        const plant = await this.plantsService.getPlantByPlantCode(data.plantCode)
        if (!plant) {
            throw new NotFoundException('Plant doesnt exist');
        }
        const savedSection = this.sectionRepository.create(data);
        await this.sectionRepository.save(data);
        this.logger.verbose('Creating a new section ...');
        return savedSection;
    }

    async editSection(sectionCode: string, updateSectionsDTO: UpdateSectionsDTO) {
        const editedSection = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!editedSection) {
            throw new NotFoundException('Section doesnt exist');
        }
        await this.sectionRepository.update({ sectionCode }, updateSectionsDTO);
        this.logger.verbose('Updating the data of edited section...');
        return await this.sectionRepository.findOne({ sectionCode });
    }

    async deleteSection(sectionCode: string) {
        const section = await this.sectionRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!section) {
            throw new NotFoundException('Section not found');
        }
        await this.sectionRepository.delete({ sectionCode });
        this.logger.verbose('Deleting the requested section...');
        return { deleted: true };
    }
}