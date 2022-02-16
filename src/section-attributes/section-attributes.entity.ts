import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";

@Entity('section_attributes')
export class SectionAttributes {

    @Column('uuid', {
        name: 'id'
    })
    id: string;

    @PrimaryGeneratedColumn({
        name: 'section_id'
    })
    sectionId: string;

    @Column({
        name: 'attribut_name'
    })
    attributeName: string;

    @Column({
        name: 'attribute_value'
    })
    attributeValue: string;

    @Column({
        name: 'plant_code'
    })
    plantCode: string;

    @Column({
        name: 'is_active',
        default: true
    })
    isActive: boolean;

    @Column({
        name: 'created_at'
    })
    createdAt: Date;

    @Column({
        name: 'updated_at'
    })
    updatedAt: Date;

    @Column({
        name: 'created_user'
    })
    createdUser: string;

    @Column({
        name: 'updated_user'
    })
    updatedUser: string;

}