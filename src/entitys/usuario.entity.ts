import { Entity, Column, PrimaryGeneratedColumn, Not, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { Pedido } from "./pedido.entity";
import { type } from "os";
import { Tokens } from "./tokens.entity";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;
    
    @Column({nullable: false, unique: true})
    rut: number;

    @Column({nullable: false, length: 60})
    nombre: string;

    @Column({nullable: true})
    empleados: number;

    @Column({nullable: true, length: 60})
    correo: string;

    @OneToMany(type =>Pedido, pedido => pedido.usuario)
    pedidos: Pedido[];

    @OneToMany(type =>Tokens, tokens => tokens.usuario)
    tokens: Tokens[];
}