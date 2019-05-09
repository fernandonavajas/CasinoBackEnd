import { Controller, HttpStatus, Get, Res, Body, Headers } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { formateaRut } from 'src/app.controller';

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
    ListarHistorialDeUsuarioPorFecha(@Headers() headers, @Res() response) {
        var dia = new Date();// fecha de hoy en formato date de postgress
        var rut_formateado = formateaRut(headers.rut);
        console.log(rut_formateado);
        this.pedidoServices.ListarHistorial(rut_formateado).then(historialList => {
            response.status(HttpStatus.OK).json(historialList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion del historial' });
        });
    }

    @Get("/historial")
    ListarHistorialAdmin(@Res() response) {
        var dia = new Date();
        var hAdmin: any[] = [];
        this.pedidoServices.listarRutsPedidos().then(listaRuts => {
            listaRuts.forEach(rut => {
                this.pedidoServices.ListarHistorialAdmin(rut.rut).then(historialUnicoAdmin => {

                    hAdmin.push(historialUnicoAdmin);
                    if(hAdmin.length==listaRuts.length){
                        response.status(HttpStatus.OK).json(hAdmin);
                    }
                    
                }).catch((e) => {
                    console.log(e)
                })
            }) ;
            

        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de los ruts de pedido' });
        });
    }
}

