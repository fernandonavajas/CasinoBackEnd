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
const tokens_service_1 = require("./tokens.service");
let TokensController = class TokensController {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    getOne(headers, response) {
        this.tokenService.getOne(headers.rut).then(tokens => {
            response.status(common_1.HttpStatus.OK).json(tokens);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de tokens' });
        });
    }
    update(headers, response) {
        console.log(headers.rut, headers.pass);
        this.tokenService.updatePassword(headers.rut, headers.pass).then(tokens => {
            response.status(common_1.HttpStatus.OK).json(tokens);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición de tokens' });
        });
    }
    create(headers, response) {
        this.tokenService.crearTokens(headers.idusuario, headers.rut)
            .then(usuario => {
            response.status(common_1.HttpStatus.CREATED).json(usuario);
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
], TokensController.prototype, "getOne", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Headers()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TokensController.prototype, "update", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Headers()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TokensController.prototype, "create", null);
TokensController = __decorate([
    common_1.Controller('tokens'),
    __metadata("design:paramtypes", [tokens_service_1.TokensService])
], TokensController);
exports.TokensController = TokensController;
//# sourceMappingURL=tokens.controller.js.map