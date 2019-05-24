import { Controller, Get, Res, HttpStatus, Body, Post, Headers} from '@nestjs/common';
import { CartaService } from './carta.service';
import { CreateCartaDto } from './carta-dto';



@Controller('carta')
export class CartaController {

    constructor(private cartaService: CartaService) { }


    @Get()
    ListarCartaDeLosProximosDias(@Res() response) {
        this.cartaService.listarCarta().then(carta => {
            response.status(HttpStatus.OK).json(carta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de la carta' });
        });
    }

    @Get('/usuario')
    ListarCartaDeLosProximosDiasDelUsuario(@Headers() headers ,@Res() response) {
        this.cartaService.listarCartaPorUsuario(headers.rut).then(carta => {
            response.status(HttpStatus.OK).json(carta);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de la carta del usuario' });
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
