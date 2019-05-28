"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_controller_1 = require("./usuarios/usuarios.controller");
const pedidos_controller_1 = require("./pedidos/pedidos.controller");
const mensajes_controller_1 = require("./mensajes/mensajes.controller");
const tipomenu_controller_1 = require("./tipomenu/tipomenu.controller");
const plato_controller_1 = require("./plato/plato.controller");
const tokens_controller_1 = require("./tokens/tokens.controller");
const carta_controller_1 = require("./carta/carta.controller");
const detalle_controller_1 = require("./detalle/detalle.controller");
const detalle_service_1 = require("./detalle/detalle.service");
const carta_service_1 = require("./carta/carta.service");
const tokens_service_1 = require("./tokens/tokens.service");
const tipomenu_service_1 = require("./tipomenu/tipomenu.service");
const plato_service_1 = require("./plato/plato.service");
const mensajes_service_1 = require("./mensajes/mensajes.service");
const usuarios_service_1 = require("./usuarios/usuarios.service");
const pedidos_service_1 = require("./pedidos/pedidos.service");
const logger_middleware_1 = require("./logger.middleware");
const mensaje_entity_1 = require("./entitys/mensaje.entity");
const usuario_entity_1 = require("./entitys/usuario.entity");
const pedido_entity_1 = require("./entitys/pedido.entity");
const tipomenu_entity_1 = require("./entitys/tipomenu.entity");
const plato_entity_1 = require("./entitys/plato.entity");
const tokens_entity_1 = require("./entitys/tokens.entity");
const detalle_entity_1 = require("./entitys/detalle.entity");
const carta_entity_1 = require("./entitys/carta.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.Logger)
            .forRoutes(usuarios_controller_1.UsuariosController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'psql4141',
                database: 'casinodb',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([mensaje_entity_1.Mensaje, usuario_entity_1.Usuario, pedido_entity_1.Pedido, tipomenu_entity_1.Tipomenu, plato_entity_1.Plato, tokens_entity_1.Tokens, carta_entity_1.Carta, detalle_entity_1.Detalle])
        ],
        controllers: [app_controller_1.AppController, mensajes_controller_1.MensajesController, usuarios_controller_1.UsuariosController, pedidos_controller_1.PedidosController, tipomenu_controller_1.TipomenuController, plato_controller_1.PlatoController, tokens_controller_1.TokensController, carta_controller_1.CartaController, detalle_controller_1.DetalleController,],
        providers: [app_service_1.AppService, mensajes_service_1.MensajesService, usuarios_service_1.UsuariosService, pedidos_service_1.PedidosService, tipomenu_service_1.TipomenuService, plato_service_1.PlatoService, tokens_service_1.TokensService, carta_service_1.CartaService, detalle_service_1.DetalleService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map