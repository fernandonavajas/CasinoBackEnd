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
const detalle_service_1 = require("./detalle.service");
const detalle_dto_1 = require("./detalle-dto");
let DetalleController = class DetalleController {
    constructor(detalleService) {
        this.detalleService = detalleService;
    }
    getAll(response) {
        this.detalleService.getAll().then(detalleList => {
            response.status(common_1.HttpStatus.OK).json(detalleList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
    create(creardetalle, response) {
        this.detalleService.crearDetalleBueno(creardetalle)
            .then(detalle => {
            response.status(common_1.HttpStatus.CREATED).json(detalle);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del detalle' });
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DetalleController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detalle_dto_1.CreateDetalleDto, Object]),
    __metadata("design:returntype", void 0)
], DetalleController.prototype, "create", null);
DetalleController = __decorate([
    common_1.Controller('detalle'),
    __metadata("design:paramtypes", [detalle_service_1.DetalleService])
], DetalleController);
exports.DetalleController = DetalleController;
//# sourceMappingURL=detalle.controller.js.map