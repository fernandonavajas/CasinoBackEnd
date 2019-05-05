import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { DetalleService } from './detalle.service';


@Controller('detalle')
export class DetalleController {

    constructor(private detalleService: DetalleService) { }

    @Get()
    getAll(@Res() response) {
        this.detalleService.getAll().then(detalleList => {
            response.status(HttpStatus.OK).json(detalleList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
}
