import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity()
export class Pedido{
    @PrimaryGeneratedColumn()
    idpedido: number;
    
    @Column({nullable: false})
    rut: number;

    @Column({type: "date",nullable: false})
    fecha: Date;

    @OneToMany(type => Usuario, usuario => usuario.rut)
    usuarios: Usuario[];
}