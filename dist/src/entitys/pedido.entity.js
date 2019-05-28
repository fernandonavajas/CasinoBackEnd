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
const usuario_entity_1 = require("./usuario.entity");
const detalle_entity_1 = require("./detalle.entity");
let Pedido = class Pedido {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Pedido.prototype, "rut", void 0);
__decorate([
    typeorm_1.Column({ type: "date", nullable: false}),
    __metadata("design:type", Date)
], Pedido.prototype, "fecha", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.Usuario, usuario => usuario.pedidos, { nullable: false, onDelete: 'CASCADE' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Pedido.prototype, "usuario", void 0);
__decorate([
    typeorm_1.OneToMany(type => detalle_entity_1.Detalle, detalle => detalle.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "detalles", void 0);
Pedido = __decorate([
    typeorm_1.Entity()
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.entity.js.map