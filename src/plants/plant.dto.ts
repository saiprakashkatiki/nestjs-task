import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, Length, Matches } from 'class-validator';

export class PlantsDTO {

    @ApiProperty({ required: true })
    @IsUUID()
    readonly barcodeId: string;

    @ApiProperty({ required: true })
    @Length(1, 5, { message: 'More than 5 chars are not allowed' })
    @Matches(/([A-Z])/, { message: 'Only Alphabets are allowed' })
    plantCode: string;

    @ApiProperty({ required: true })
    @Length(5, 30, { message: 'More than 30 chars are not allowed' })
    plantName: string;

    @ApiProperty({ required: true })
    @Length(5, 20, { message: 'More than 20 chars are not allowed' })
    userName: string;

    @ApiProperty({ default: true })
    isActive: boolean;
}

export class UpdatePlantsDTO {

    @ApiProperty({ required: true })
    plantName: string;

    @ApiProperty({ required: true })
    userName: string;

    @ApiProperty({ default: true })
    isActive: boolean;
}

export class StatusPlantDTO {

    @ApiProperty({ default: true })
    isActive: boolean;

}