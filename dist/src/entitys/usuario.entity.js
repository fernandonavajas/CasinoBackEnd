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
const pedido_entity_1 = require("./pedido.entity");
const tokens_entity_1 = require("./tokens.entity");
let Usuario = class Usuario {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, unique: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "rut", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 60 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "empleados", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 60 }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    typeorm_1.OneToMany(type => pedido_entity_1.Pedido, pedido => pedido.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "pedidos", void 0);
__decorate([
    typeorm_1.OneToMany(type => tokens_entity_1.Tokens, tokens => tokens.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "tokens", void 0);
Usuario = __decorate([
    typeorm_1.Entity()
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map