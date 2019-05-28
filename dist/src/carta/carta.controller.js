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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const carta_service_1 = require("./carta.service");
const carta_dto_1 = require("./carta-dto");
let CartaController = class CartaController {
    constructor(cartaService) {
        this.cartaService = cartaService;
    }
    ListarCartaDeLosProximosDias(response) {
        this.cartaService.listarCarta().then(carta => {
            response.status(common_1.HttpStatus.OK).json(carta);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de la carta' });
        });
    }
    ListarCartaDeLosProximosDiasDelUsuario(headers, response) {
        this.cartaService.listarCartaPorUsuario(headers.rut).then(carta => {
            response.status(common_1.HttpStatus.OK).json(carta);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de la carta del usuario' });
        });
    }
    create(carta, response) {
        this.cartaService.crearCarta(carta)
            .then(carta => {
            response.status(common_1.HttpStatus.CREATED).json(carta);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación de la carta' });
        });
    }
    delete(headers, response) {
        this.cartaService.EliminarCarta(headers.fechaconsulta)
            .then(deleteCarta => {
            response.status(common_1.HttpStatus.OK).json(deleteCarta);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminacion de la carta' });
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartaController.prototype, "ListarCartaDeLosProximosDias", null);
__decorate([
    common_1.Get('/usuario'),
    __param(0, common_1.Headers()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CartaController.prototype, "ListarCartaDeLosProximosDiasDelUsuario", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carta_dto_1.CreateCartaDto, Object]),
    __metadata("design:returntype", void 0)
], CartaController.prototype, "create", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Headers()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CartaController.prototype, "delete", null);
CartaController = __decorate([
    common_1.Controller('carta'),
    __metadata("design:paramtypes", [carta_service_1.CartaService])
], CartaController);
exports.CartaController = CartaController;
//# sourceMappingURL=carta.controller.js.map