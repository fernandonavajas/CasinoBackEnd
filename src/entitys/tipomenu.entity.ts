import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { type } from "os";
import { Carta } from "./carta.entity";


@Entity()
export class Tipomenu{
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({nullable: false, length: 60, unique: true})
    nombre: string;

    @OneToMany(type => Carta, carta => carta.tipomenu)
    cartas: Carta[];
}