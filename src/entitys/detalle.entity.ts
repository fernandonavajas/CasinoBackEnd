import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Carta } from "./carta.entity";
import { Pedido } from "./pedido.entity";



@Entity()
export class Detalle{
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({nullable: false})
    cantidad: number;

    @ManyToOne(type => Carta, carta => carta.detalles, { onDelete: 'CASCADE' })
    carta: Carta;

    @ManyToOne(type=> Pedido, pedido => pedido.detalles, { onDelete: 'CASCADE' })
    pedido: Pedido;
}