import { Entity, Column, PrimaryGeneratedColumn, Not, PrimaryColumn, ManyToOne } from "typeorm";
import { Pedido } from "./pedido.entity";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    idusuario: number;
    
    @Column({nullable: false, unique: true})
    rut: number;

    @Column({nullable: false, length: 60})
    nombre: string;

    @Column({nullable: true})
    empleados: number;

    @Column({nullable: true, length: 60})
    correo: string;

    @ManyToOne(type => Pedido, pedido => pedido.rut)
    pedido: Pedido;
}