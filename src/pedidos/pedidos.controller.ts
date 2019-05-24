import { Controller, HttpStatus, Get, Res, Body, Headers, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { formateaRut } from 'src/app.controller';
import { CreatePedidosDto } from './pedido-dto';

@Controller('pedidos')
export class PedidosController {

    constructor(private pedidoServices: PedidosService) { }

    /****************           Listar el historial de cada cliente ******************/
    @Get()
    ListarHistorialCliente(@Headers() headers, @Res() response) {
        var dia = new Date();// fecha de hoy en formato date de postgress
        var rut_formateado = formateaRut(headers.rut);
        console.log(rut_formateado);
        this.pedidoServices.ListarHistorialCliente(rut_formateado).then(historialList => {
            response.status(HttpStatus.OK).json(historialList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion del historial' });
        });
    }

    @Get("/historial")
    ListarHistorialAdmin(@Res() response) {
        this.pedidoServices.ListarHistorialAdmin().then(historialList => {
            response.status(HttpStatus.OK).json(historialList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion del historial' });
        });
    }

    @Post()
    create(@Body() pedido:CreatePedidosDto, @Res() response) {
        //console.log(pedido);
        pedido.fecha=new Date();
        this.pedidoServices.crearPedido(pedido)
            .then(pedido => {
                response.status(HttpStatus.CREATED).json(pedido);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del usuario' });
            });
    }
}

