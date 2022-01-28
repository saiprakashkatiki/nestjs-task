import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Section } from "../../sections/entities/section.entity";

@Entity('plants')
@Unique(['plantCode'])
export class Plant {

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

    @Column({
        name: 'is_active', default: true
    })
    isActive: boolean;

    @OneToMany(type => Section , section => section.plant)
    section: Section[];
}