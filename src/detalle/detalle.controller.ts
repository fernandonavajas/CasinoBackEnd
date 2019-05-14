import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { CreateDetalleDto } from './detalle-dto';


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

    @Post()
    create(@Body() crearDetalleDto: CreateDetalleDto, @Res() response) {
        //console.log(crearDetalleDto);
        this.detalleService.crearDetalle(crearDetalleDto)
            .then(detalle => {
                response.status(HttpStatus.CREATED).json(detalle);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del detalle' });
            });
    }
}
