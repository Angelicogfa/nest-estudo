import { Photo } from "photo/model/photo.model";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'photo'})
export class PhotoEntity implements Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 200, nullable: false })
    description: string;

    @Column({ length: 800, nullable: false })
    filename: string;

    @Column({ nullable: false, default: 0 })
    views: number;

    @Column({ nullable: false, default: false })
    isPublished: boolean;
}