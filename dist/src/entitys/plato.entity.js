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
let Plato = class Plato {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Plato.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 60, unique: true }),
    __metadata("design:type", String)
], Plato.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 400 }),
    __metadata("design:type", String)
], Plato.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 400 }),
    __metadata("design:type", String)
], Plato.prototype, "foto", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Plato.prototype, "calorias", void 0);
__decorate([
    typeorm_1.OneToMany(type => carta_entity_1.Carta, carta => carta.plato),
    __metadata("design:type", Array)
], Plato.prototype, "cartas", void 0);
Plato = __decorate([
    typeorm_1.Entity()
], Plato);
exports.Plato = Plato;
//# sourceMappingURL=plato.entity.js.map