import { ApiProperty } from '@nestjs/swagger';

export class PlantsDTO {

    @ApiProperty()
    barcodeId: string;

    @ApiProperty()
    plantCode: string;

    @ApiProperty()
    plantName: string;

    @ApiProperty()
    createdUser: string;

    @ApiProperty()
    updatedUser: string;

    @ApiProperty()
    isActive: boolean;
}