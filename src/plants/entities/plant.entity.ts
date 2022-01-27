import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('plants')
@Unique(['plantCode'])
export class PlantsEntity {

    @PrimaryGeneratedColumn('uuid', {
        name: 'barcode_id'
    })
    barcodeId: string;

    @Column({
        name: 'plant_code'
    })
    plantCode: string;

    @Column({
        name: 'plant_name'
    })
    plantName: string;

    @Column({
        name: 'user_name'
    })
    userName: string;

    @Column('boolean', {
        name: 'is_active', default: true
    })
    isActive: boolean;
}