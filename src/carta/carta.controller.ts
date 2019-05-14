import { Controller, Get, Res, HttpStatus, Param, Body, Post } from '@nestjs/common';
import { CartaService } from './carta.service';
import { Carta } from 'src/entitys/carta.entity';
import { CreateCartaDto } from './carta-dto';



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
        console.log(dia," carta.controller 25");
        this.cartaService.listarPorFecha(dia).then(carta => {
            response.status(HttpStatus.OK).json(carta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de la carta' });
        });
    }
    @Get('/fechas')
    ListaFecha(@Body() TomaFecha: Date,@Res() response) {
        var dia=new Date();// fecha de hoy en formato date de postgress
        console.log(dia," carta.controller 35");
        this.cartaService.listarFechas(dia).then(fechas => {
            response.status(HttpStatus.OK).json(fechas);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de las fechas' });
        });
    }

    @Post()
    create(@Body() carta:CreateCartaDto, @Res() response) {
        console.log(carta);
        carta.fecha=new Date(carta.fecha);
        console.log(carta);
        this.cartaService.crearCarta(carta)
            .then(carta => {
                response.status(HttpStatus.CREATED).json(carta);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del usuario' });
            });
    }
    
}
