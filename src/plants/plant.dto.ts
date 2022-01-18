import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class Plant {
    @ApiProperty()
    plantCode: string;

    @ApiProperty()
    plantName: string;

    @ApiProperty()
    userName: string;
}