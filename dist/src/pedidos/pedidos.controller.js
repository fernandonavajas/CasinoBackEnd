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
const pedidos_service_1 = require("./pedidos.service");
const app_controller_1 = require("src/app.controller");
const pedido_dto_1 = require("./pedido-dto");
let PedidosController = class PedidosController {
    constructor(pedidoServices) {
        this.pedidoServices = pedidoServices;
    }
    ListarHistorialCliente(headers, response) {
        var dia = new Date();
        var rut_formateado = app_controller_1.formateaRut(headers.rut);
        console.log(rut_formateado);
        this.pedidoServices.ListarHistorialCliente(rut_formateado).then(historialList => {
            response.status(common_1.HttpStatus.OK).json(historialList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion del historial' });
        });
    }
    ListarHistorialAdmin(response) {
        this.pedidoServices.ListarHistorialAdmin().then(historialList => {
            response.status(common_1.HttpStatus.OK).json(historialList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion del historial' });
        });
    }
    create(pedido, response) {
        pedido.fecha = new Date();
        this.pedidoServices.crearPedido(pedido)
            .then(pedido => {
            response.status(common_1.HttpStatus.CREATED).json(pedido);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del usuario' });
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Headers()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "ListarHistorialCliente", null);
__decorate([
    common_1.Get("/historial"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "ListarHistorialAdmin", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pedido_dto_1.CreatePedidosDto, Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "create", null);
PedidosController = __decorate([
    common_1.Controller('pedidos'),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
exports.PedidosController = PedidosController;
//# sourceMappingURL=pedidos.controller.js.map