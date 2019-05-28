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
const usuarios_service_1 = require("./usuarios.service");
const usuario_dto_1 = require("./usuario-dto");
const app_controller_1 = require("src/app.controller");
let UsuariosController = class UsuariosController {
    constructor(usuarioServices) {
        this.usuarioServices = usuarioServices;
    }
    getAll(response) {
        this.usuarioServices.getAll().then(usuariosList => {
            response.status(common_1.HttpStatus.OK).json(usuariosList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de usuarios' });
        });
    }
    getOne(response, id) {
        this.usuarioServices.getOne(id).then(usuario => {
            response.status(common_1.HttpStatus.OK).json(usuario);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de usuario1' });
        });
    }
    Autentificacion(headers, response) {
        if (headers.rut != null) {
            var codigo = app_controller_1.formateaRut(headers.rut);
            var pass = headers.password;
            var validado = { rut: codigo, password: pass };
            this.usuarioServices.Loggin(validado).then(usuario => {
                response.status(common_1.HttpStatus.OK).json(usuario);
            }).catch(() => {
                response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error de sesión, no figura en la base de datos' });
            });
        }
        else {
            response.status(common_1.HttpStatus.BAD_REQUEST).json({ mensaje: "No ha ingresado rut de usuario" });
        }
    }
    create(crearUsuarioDto, response) {
        console.log('entre pp');
        this.usuarioServices.createUser(crearUsuarioDto)
            .then(usuario => {
            response.status(common_1.HttpStatus.CREATED).json(usuario);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del usuario' });
        });
    }
    update(updateUserDto, response, idUsuario) {
        this.usuarioServices.updateUsuario(idUsuario, updateUserDto).then(usuario => {
            response.status(common_1.HttpStatus.OK).json(usuario);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición del usuario' });
        });
    }
    delete(response, idUsuario) {
        console.log(idUsuario);
        this.usuarioServices.deleteUsuario(idUsuario).then(res => {
            response.status(common_1.HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación del usuario' });
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "getOne", null);
__decorate([
    common_1.Get('/login/auth'),
    __param(0, common_1.Headers()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "Autentificacion", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.usuarioDto, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Res()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.usuarioDto, Object, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "delete", null);
UsuariosController = __decorate([
    common_1.Controller('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map