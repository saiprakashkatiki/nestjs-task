import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlantDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    plantCode: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    plantName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userName: string;

}

