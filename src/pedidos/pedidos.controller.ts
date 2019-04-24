import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {

    constructor(private pedidoServices: PedidosService) { }

    @Get()
    getAll(@Res() response) {
        this.pedidoServices.getAll().then(pedidosList => {
            response.status(HttpStatus.OK).json(pedidosList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
}