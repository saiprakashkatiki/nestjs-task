import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class PlantsDTO {

    @ApiProperty({required:true})
    @IsUUID()
    readonly barcodeId: string;

    @ApiProperty({required:true})
    plantCode: string;

    @ApiProperty({required:true})
    plantName: string;

    @ApiProperty({required:true})
    userName: string;

    @ApiProperty({default:true})
    isActive: boolean;
}