import { EntityRepository, Repository } from 'typeorm';
import { Plant } from './entities/plant.entity'; 

@EntityRepository(Plant)
export class PlantRepository extends Repository<Plant> {}