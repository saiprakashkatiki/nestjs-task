import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('plants')
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
        name: 'created_user'
    })
    createdUser: string;

    @Column({
        name: 'updated_user'
    })
    updatedUser: string;

    @Column('boolean', {
        name: 'is_active', default:true
    })
    isActive: boolean;
}