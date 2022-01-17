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

    
    getPlant(plantCode): Promise<any> {
        let id = String(plantCode) 
        return new Promise(resolve => {
            const plant = this.plants.find(plant => plant.plantCode === id);

            if(!plant) {
                throw new HttpException('Plant does not exist', 404)
            }
            resolve(plant);
        });
    }


    savePlant(plant): Promise<any> {
        return new Promise(resolve =>{
            this.plants.push(plant);
            resolve(this.plants);
        });
    }
}
