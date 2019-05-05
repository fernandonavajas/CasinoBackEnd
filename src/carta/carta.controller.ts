import { Controller, Get, Res, HttpStatus, Param, Body } from '@nestjs/common';
import { CartaService } from './carta.service';
import { Carta } from 'src/entitys/carta.entity';



@Controller('carta')
export class CartaController {

    constructor(private cartaService: CartaService) { }

    /*@Get()
    getAll(@Res() response) {
        this.cartaService.getAll().then(cartaList => {
            response.status(HttpStatus.OK).json(cartaList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }*/
//*************        Listar la carta de platos por fecha**************** */
    @Get()
    ListarPorFecha(@Body() TomaFecha: Date,@Res() response) {
        var dia=new Date();// fecha de hoy en formato date de postgress
        console.log(dia);
        this.cartaService.listarPorFecha(dia).then(carta => {
            response.status(HttpStatus.OK).json(carta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de la carta' });
        });
    }
    @Get('/fechas')
    ListaFecha(@Body() TomaFecha: Date,@Res() response) {
        var dia=new Date();// fecha de hoy en formato date de postgress
        console.log(dia);
        this.cartaService.listarFechas(dia).then(fechas => {
            response.status(HttpStatus.OK).json(fechas);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de las fechas' });
        });
    }
    
    
}
