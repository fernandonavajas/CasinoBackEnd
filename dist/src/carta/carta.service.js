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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carta_entity_1 = require("src/entitys/carta.entity");
const typeorm_2 = require("typeorm");
let CartaService = class CartaService {
    constructor(cartaRepository) {
        this.cartaRepository = cartaRepository;
    }
    listarCarta() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_2.getConnection().createEntityManager().query(`select * from public.listarPlatosCartaMayoresAHoy() order by fechacarta desc`);
        });
    }
    listarCartaPorUsuario(rut) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_2.getConnection().createEntityManager().query(`select * from listarPlatosCartaConCantidadMayoresAHoy(${rut}) order by fechacarta desc;`);
        });
    }
    EliminarCarta(fechaConsultada) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(fechaConsultada);
            return yield typeorm_2.getConnection().createEntityManager().query(`delete from carta where fecha='${fechaConsultada}'`);
        });
    }
    crearCarta(carta) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(carta);
            return yield typeorm_2.getConnection().createEntityManager().query(`select InsertarCarta('${carta.fecha}',${carta.p1},${carta.p2},${carta.p3},${carta.p4},${carta.p5},${carta.p6});`);
        });
    }
};
CartaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(carta_entity_1.Carta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CartaService);
exports.CartaService = CartaService;
//# sourceMappingURL=carta.service.js.map