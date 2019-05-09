import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Carta } from "./carta.entity";



@Entity()
export class Plato{
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({nullable: false, length: 60, unique:true})
    nombre: string;
    
    @Column({nullable: true, length: 400})
    descripcion: string;

    @Column({nullable: true, length: 400})//type:"bytea"
    foto: string;

    @Column({nullable: true})
    calorias: number;

    @OneToMany(type => Carta, carta => carta.plato)
    cartas: Carta[];

}