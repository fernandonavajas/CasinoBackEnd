import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {

    constructor(private pedidoServices: PedidosService) { }
    /*
        @Get()
        getAll(@Res() response) {
            this.pedidoServices.getAll().then(pedidosList => {
                response.status(HttpStatus.OK).json(pedidosList);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
            });
        }
    */
    /****************           Listar el historial de cada cliente ******************/
    @Get()
    LisatPorFecha(@Res() response) {
        var dia = new Date();// fecha de hoy en formato date de postgress
        console.log(dia);

        // cambiar este rut para dejarlo por headers o body
        var rut: number = 18990554;
        this.pedidoServices.ListarHistorial(rut).then(historialList => {
            response.status(HttpStatus.OK).json(historialList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion del historial' });
        });
    }
}