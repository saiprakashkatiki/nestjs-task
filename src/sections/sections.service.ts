import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Section } from './entities/section.entity';
import { SectionsDTO, UpdateSectionsDTO } from './section.dto';

@Injectable()
export class SectionsService {
    constructor(
        @InjectRepository(Section)
        private readonly sectionsRepository: Repository<Section>,
    ) { }

    async getAllSections() {
        return await this.sectionsRepository.find();
    }

    async getSectionBySectionCode(sectionCode: string) {
        const section = await this.sectionsRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!section) {
            throw new NotFoundException('Section not found');
        }
        return section;
    }

    async saveSection(data: SectionsDTO) {
        const section = this.sectionsRepository.create(data);
        await this.sectionsRepository.save(data);
        return section;
    }

    async editSection(sectionCode: string, data: UpdateSectionsDTO) {
        const editedSection = await this.sectionsRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!editedSection) {
            throw new NotFoundException('Section doesnt exist');
        }
        await this.sectionsRepository.update({ sectionCode }, data);
        return await this.sectionsRepository.findOne({ sectionCode });
    }

    async deleteSection(sectionCode: string) {
        const section = await this.sectionsRepository.findOne({
            where: {
                sectionCode: sectionCode,
            }
        });
        if (!section) {
            throw new NotFoundException('Section not found');
        }
        await this.sectionsRepository.delete({ sectionCode });
        return { deleted: true };
    }
}