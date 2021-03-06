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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pedido_entity_1 = require("../entitys/pedido.entity");
const common_1 = require("@nestjs/common");
let PedidosService = class PedidosService {
    constructor(pedidosRepository) {
        this.pedidosRepository = pedidosRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pedidosRepository.find();
        });
    }
    crearPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_2.getConnection()
                .createQueryBuilder()
                .insert()
                .into(pedido_entity_1.Pedido)
                .values({
                rut: pedido.rut,
                fecha: pedido.fecha,
                usuario: {
                    id: pedido.usuarioId
                }
            })
                .execute();
        });
    }
    ListarHistorialCliente(rut) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_2.getConnection().createEntityManager().query(`select * from public.listarPlatosHistorial(${rut}) order by fechacarta desc;`);
        });
    }
    ListarHistorialAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_2.getConnection().createEntityManager().query(`select * from public.listarPlatosHistorialAdmin() order by fechacarta desc, empresa desc;`);
        });
    }
};
PedidosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pedido_entity_1.Pedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PedidosService);
exports.PedidosService = PedidosService;
//# sourceMappingURL=pedidos.service.js.map