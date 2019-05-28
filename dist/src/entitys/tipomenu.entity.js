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
let Tipomenu = class Tipomenu {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Tipomenu.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, length: 60, unique: true }),
    __metadata("design:type", String)
], Tipomenu.prototype, "nombre", void 0);
__decorate([
    typeorm_1.OneToMany(type => carta_entity_1.Carta, carta => carta.tipomenu),
    __metadata("design:type", Array)
], Tipomenu.prototype, "cartas", void 0);
Tipomenu = __decorate([
    typeorm_1.Entity()
], Tipomenu);
exports.Tipomenu = Tipomenu;
//# sourceMappingURL=tipomenu.entity.js.map