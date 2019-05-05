import { Controller, HttpStatus, Res, Get, Param } from '@nestjs/common';
import { PlatoService } from './plato.service';

@Controller('plato')
export class PlatoController {
    constructor(private platoServices: PlatoService) { }

    @Get()
    getAll(@Res() response) {
        this.platoServices.getAll().then(platolist => {
            response.status(HttpStatus.OK).json(platolist);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de platos' });
        });
    }
    @Get(':id')
    getOne(@Res() response, @Param('id') id) {
        this.platoServices.getOne(id).then(plato => {
            response.status(HttpStatus.OK).json(plato);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de plato' });
        });
    }

}
