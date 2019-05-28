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
const tokens_entity_1 = require("src/entitys/tokens.entity");
const typeorm_2 = require("typeorm");
let TokensService = class TokensService {
    constructor(tokensRepository) {
        this.tokensRepository = tokensRepository;
    }
    getOne(rut) {
        return __awaiter(this, void 0, void 0, function* () {
            const oneToken = yield this.tokensRepository.createQueryBuilder('tokens')
                .select([
                "tokens.rut",
                "tokens.pass"
            ])
                .where('tokens.rut = :rut ', { rut: rut })
                .getOne();
            return yield oneToken;
        });
    }
    updatePassword(rutUsuario, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(rutUsuario, pass);
            return yield typeorm_2.getConnection()
                .createQueryBuilder()
                .update(tokens_entity_1.Tokens)
                .set({ pass: pass })
                .where("rut = :rut", { rut: rutUsuario })
                .execute();
        });
    }
    crearTokens(idUsuario, rut) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_2.getConnection()
                .createQueryBuilder()
                .insert()
                .into(tokens_entity_1.Tokens)
                .values({
                rut: rut,
                pass: '2019',
                api_key: '',
                rol: 'cliente',
                usuario: {
                    id: idUsuario
                }
            })
                .execute();
        });
    }
};
TokensService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tokens_entity_1.Tokens)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TokensService);
exports.TokensService = TokensService;
//# sourceMappingURL=tokens.service.js.map