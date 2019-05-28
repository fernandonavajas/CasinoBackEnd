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
const plato_entity_1 = require("./plato.entity");
const tipomenu_entity_1 = require("./tipomenu.entity");
const detalle_entity_1 = require("./detalle.entity");
let Carta = class Carta {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Carta.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], Carta.prototype, "fecha", void 0);
__decorate([
    typeorm_1.ManyToOne(type => plato_entity_1.Plato, plato => plato.cartas, { nullable: false, onDelete: 'CASCADE' }),
    __metadata("design:type", plato_entity_1.Plato)
], Carta.prototype, "plato", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipomenu_entity_1.Tipomenu, tipomenu => tipomenu.cartas, { nullable: false, onDelete: 'CASCADE' }),
    __metadata("design:type", tipomenu_entity_1.Tipomenu)
], Carta.prototype, "tipomenu", void 0);
__decorate([
    typeorm_1.OneToMany(type => detalle_entity_1.Detalle, detalle => detalle.carta, { nullable: false }),
    __metadata("design:type", Array)
], Carta.prototype, "detalles", void 0);
Carta = __decorate([
    typeorm_1.Entity()
], Carta);
exports.Carta = Carta;
//# sourceMappingURL=carta.entity.js.map