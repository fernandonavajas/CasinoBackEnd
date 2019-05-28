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
const usuario_entity_1 = require("../entitys/usuario.entity");
const common_1 = require("@nestjs/common");
class loginModel {
}
exports.loginModel = loginModel;
let UsuariosService = class UsuariosService {
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usuariosRepository.find();
        });
    }
    getOne(idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield this.usuariosRepository.createQueryBuilder('usuario')
                .where('usuario.id = :id ', { id: idUsuario })
                .getOne();
            return yield a;
        });
    }
    Loggin(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield typeorm_2.createQueryBuilder(usuario_entity_1.Usuario, 'u')
                    .select([
                    "u.id",
                    "u.nombre",
                    "u.rut",
                    "t.rol",
                    "t.api_key",
                ])
                    .innerJoin("u.tokens", "t")
                    .where("u.rut = :rut", { rut: parseInt(auth.rut) })
                    .andWhere("t.pass = :pass", { pass: auth.password })
                    .getOne();
                return yield usuario;
            }
            catch (e) {
                return e;
            }
        });
    }
    createUser(usuarioNuevo) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevo = new usuario_entity_1.Usuario();
            nuevo.nombre = usuarioNuevo.nombre;
            nuevo.rut = usuarioNuevo.rut;
            nuevo.empleados = usuarioNuevo.empleados;
            nuevo.correo = usuarioNuevo.correo;
            return yield this.usuariosRepository.save(nuevo);
        });
    }
    updateUsuario(idUsuario, usuarioActualizar) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioUpdate = yield this.usuariosRepository.findOne(idUsuario);
            usuarioUpdate.nombre = usuarioActualizar.nombre;
            usuarioUpdate.empleados = usuarioActualizar.empleados;
            usuarioUpdate.rut = usuarioActualizar.rut;
            usuarioUpdate.correo = usuarioActualizar.correo;
            return yield this.usuariosRepository.save(usuarioUpdate);
        });
    }
    deleteUsuario(idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usuariosRepository.delete(idUsuario);
        });
    }
};
UsuariosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map