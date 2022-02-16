import { Test, TestingModule } from '@nestjs/testing';
import { SectionAttributesController } from './section-attributes.controller';

describe('SectionAttributesController', () => {
  let controller: SectionAttributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionAttributesController],
    }).compile();

    controller = module.get<SectionAttributesController>(SectionAttributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
