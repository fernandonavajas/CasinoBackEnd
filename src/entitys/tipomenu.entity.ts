import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Tipomenu{
    @PrimaryGeneratedColumn({type: "bigint"})
    idtipomenu: number;

    @Column({nullable: false, length: 60, unique: true})
    nombre: string;
}