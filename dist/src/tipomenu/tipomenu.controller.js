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
const tipomenu_service_1 = require("./tipomenu.service");
let TipomenuController = class TipomenuController {
    constructor(tipomenuService) {
        this.tipomenuService = tipomenuService;
    }
    getAll(response) {
        this.tipomenuService.getAll().then(tipomenuList => {
            response.status(common_1.HttpStatus.OK).json(tipomenuList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TipomenuController.prototype, "getAll", null);
TipomenuController = __decorate([
    common_1.Controller('tipomenu'),
    __metadata("design:paramtypes", [tipomenu_service_1.TipomenuService])
], TipomenuController);
exports.TipomenuController = TipomenuController;
//# sourceMappingURL=tipomenu.controller.js.map