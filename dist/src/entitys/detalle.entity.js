"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const carta_entity_1 = require("./carta.entity");
const pedido_entity_1 = require("./pedido.entity");
let Detalle = class Detalle {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Detalle.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Detalle.prototype, "cantidad", void 0);
__decorate([
    typeorm_1.ManyToOne(type => carta_entity_1.Carta, carta => carta.detalles, { onDelete: 'CASCADE' }),
    __metadata("design:type", carta_entity_1.Carta)
], Detalle.prototype, "carta", void 0);
__decorate([
    typeorm_1.ManyToOne(type => pedido_entity_1.Pedido, pedido => pedido.detalles, { onDelete: 'CASCADE' }),
    __metadata("design:type", pedido_entity_1.Pedido)
], Detalle.prototype, "pedido", void 0);
Detalle = __decorate([
    typeorm_1.Entity()
], Detalle);
exports.Detalle = Detalle;
//# sourceMappingURL=detalle.entity.js.map