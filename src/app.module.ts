import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { UsuariosController } from './usuarios/usuarios.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { MensajesController } from './mensajes/mensajes.controller';
import { TipomenuController } from './tipomenu/tipomenu.controller';
import { PlatoController } from './plato/plato.controller';
import { TokensController } from './tokens/tokens.controller';
import { CartaController } from './carta/carta.controller';
import { DetalleController } from './detalle/detalle.controller';

// Services
import { DetalleService } from './detalle/detalle.service';
import { CartaService } from './carta/carta.service';
import { TokensService } from './tokens/tokens.service';
import { TipomenuService } from './tipomenu/tipomenu.service';
import { PlatoService } from './plato/plato.service';
import { MensajesService } from './mensajes/mensajes.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { PedidosService } from './pedidos/pedidos.service';
import { Logger } from './logger.middleware';

//entitys
import { Mensaje } from './entitys/mensaje.entity';
import { Usuario } from './entitys/usuario.entity';
import { Pedido } from './entitys/pedido.entity';
import { Tipomenu } from './entitys/tipomenu.entity';
import { Plato } from './entitys/plato.entity';
import { Tokens } from './entitys/tokens.entity';
import { Detalle } from './entitys/detalle.entity';
import { Carta } from './entitys/carta.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'psql4141',
      database: 'casinodb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje, Usuario, Pedido, Tipomenu, Plato, Tokens, Carta, Detalle])

  ],
  controllers: [AppController, MensajesController, UsuariosController, PedidosController, TipomenuController, PlatoController, TokensController, CartaController, DetalleController,],
  providers: [AppService, MensajesService, UsuariosService, PedidosService, TipomenuService, PlatoService, TokensService, CartaService, DetalleService],
})
export class AppModule implements NestModule{ 
  configure (consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger)
      .forRoutes(UsuariosController);
  }
}