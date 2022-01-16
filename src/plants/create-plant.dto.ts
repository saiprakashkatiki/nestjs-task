import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlant {

    @IsNotEmpty()
    @IsString()
    plantCode: string;

    @IsNotEmpty()
    @IsString()
    plantName: string;

    @IsNotEmpty()
    @IsString()
    userName: string;

}

