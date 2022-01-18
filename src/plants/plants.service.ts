import { Injectable, HttpException } from '@nestjs/common';
import { Plant } from './plant.dto';

@Injectable()
export class PlantsService {
   private plants: Plant[]=[];

    getAllPlants(): Promise<any> {
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

    /*
    deletePlant(plantCode): Promise<any> {
        let id = String(plantCode);
        return new Promise(resolve => {
            let index = this.plants.findIndex(plant => plant.plantCode === id);
            if (index === -1) {
                throw new HttpException('Plant does not exist', 404);
            }
            this.plants.splice(index, 1);
            resolve(this.plants);
        });
    }
    */
}
