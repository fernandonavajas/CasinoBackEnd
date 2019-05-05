import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Detalle } from "./detalle.entity";
import { networkInterfaces } from "os";

@Entity()
export class Pedido{
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;
    
    @Column({nullable: false})
    rut: number;

    @Column({type: "date",nullable: false, default: "24/04/2019"})
    fecha: Date;

    @ManyToOne(type => Usuario, usuario => usuario.Pedidos)
    usuario: Usuario;

    @OneToMany(type => Detalle, detalle => detalle.pedido)
    detalles: Detalle[];
}