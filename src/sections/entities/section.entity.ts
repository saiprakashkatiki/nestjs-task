import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { Plant } from "../../plants/entities/plant.entity";

@Entity('sections')
@Unique(['sectionCode'])
export class Section {

    @PrimaryGeneratedColumn('uuid', {
        name: 'id'
    })
    id: string;

    @Column({
        name: 'section_name'
    })
    sectionName: string;

    @Column({
        name: 'section_code'
    })
    sectionCode: string;

    @Column({
        name: 'user_name'
    })
    userName: string;

    @Column({
        name: 'plant_code'
    })
    plantCode: string;

    @ManyToOne(type => Plant , plant => plant.sections)
    plant:Plant[];
    
}