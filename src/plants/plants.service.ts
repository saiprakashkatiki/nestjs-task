import { Injectable, HttpException } from '@nestjs/common';
import { PLANTS } from './plants.mock';

@Injectable()
export class PlantsService {
    plants = PLANTS;

    getPlants(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.plants);
        });
    }

    /*
    getPlant(plantId): Promise<any> {
        let id = Number(plantId) 
        return new Promise(resolve => {
            const plant = this.plants.find(plant => plant.id === id);

            if(!plant) {
                throw new HttpException('Plant does not exist', 404)
            }
            resolve(plant);
        });
    }
    */

    savePlant(plant): Promise<any> {
        return new Promise(resolve =>{
            this.plants.push(plant);
            resolve(this.plants);
        });
    }
}
