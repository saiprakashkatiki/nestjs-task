import { Module } from '@nestjs/common';
import { SectionAttributesService } from './section-attributes.service';
import { SectionAttributesController } from './section-attributes.controller';

@Module({
  providers: [SectionAttributesService],
  controllers: [SectionAttributesController]
})
export class SectionAttributesModule {}
