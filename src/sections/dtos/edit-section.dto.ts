import { ApiProperty } from '@nestjs/swagger';
import { Length, Matches } from 'class-validator';

export class UpdateSectionsDTO {

    @ApiProperty({ required: true })
    @Length(5, 30, { message: 'More than 30 chars are not allowed' })
    sectionName: string;

    @ApiProperty({ required: true })
    @Length(5, 20, { message: 'More than 20 chars are not allowed' })
    userName: string;

    @ApiProperty({ required: true })
    @Length(1, 5, { message: 'More than 5 chars are not allowed' })
    @Matches(/([A-Z])/, { message: 'Only Alphabets are allowed' })
    plantCode: string;
    
}