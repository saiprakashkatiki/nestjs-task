import { Test, TestingModule } from '@nestjs/testing';
import { SectionAttributesService } from './section-attributes.service';

describe('SectionAttributesService', () => {
  let service: SectionAttributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectionAttributesService],
    }).compile();

    service = module.get<SectionAttributesService>(SectionAttributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
