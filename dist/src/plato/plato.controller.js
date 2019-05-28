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
const plato_service_1 = require("./plato.service");
const plato_dto_1 = require("./plato-dto");
let PlatoController = class PlatoController {
    constructor(platoServices) {
        this.platoServices = platoServices;
    }
    getAll(response) {
        this.platoServices.getAll().then(platolist => {
            response.status(common_1.HttpStatus.OK).json(platolist);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de platos' });
        });
    }
    getOne(response, id) {
        this.platoServices.getOne(id).then(plato => {
            response.status(common_1.HttpStatus.OK).json(plato);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de plato' });
        });
    }
    create(crearPlatoDTO, response) {
        console.log('entre pp');
        this.platoServices.createUser(crearPlatoDTO)
            .then(plato => {
            response.status(common_1.HttpStatus.CREATED).json(plato);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del plato' });
        });
    }
    update(updatePlatoDTO, response, idPlato) {
        this.platoServices.updatePlato(idPlato, updatePlatoDTO).then(plato => {
            response.status(common_1.HttpStatus.OK).json(plato);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición del plato' });
        });
    }
    delete(response, idPlato) {
        this.platoServices.deletePlato(idPlato).then(res => {
            response.status(common_1.HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación del plato' });
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlatoController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlatoController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [plato_dto_1.platoDto, Object]),
    __metadata("design:returntype", void 0)
], PlatoController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Res()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [plato_dto_1.platoDto, Object, Object]),
    __metadata("design:returntype", void 0)
], PlatoController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlatoController.prototype, "delete", null);
PlatoController = __decorate([
    common_1.Controller('plato'),
    __metadata("design:paramtypes", [plato_service_1.PlatoService])
], PlatoController);
exports.PlatoController = PlatoController;
//# sourceMappingURL=plato.controller.js.map