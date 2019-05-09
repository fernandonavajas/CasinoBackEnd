import { Controller, HttpStatus, Res, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { platoDto } from './plato-dto';

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
    @Post()
    create(@Body() crearPlatoDTO: platoDto, @Res() response) {
        console.log('entre pp');
        this.platoServices.createUser(crearPlatoDTO)
            .then(plato => {
                response.status(HttpStatus.CREATED).json(plato);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del plato' });
            });
    }
    //*******************************         Modificar a un  usuario          ******************************/
    @Put(':id') // 
    update(@Body() updatePlatoDTO: platoDto, @Res() response, @Param('id') idPlato) {
        this.platoServices.updatePlato(idPlato, updatePlatoDTO).then(plato => {
            response.status(HttpStatus.OK).json(plato);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición del plato' });
        });
    }
    //*******************************         Eliminar a un  usuario          **********************************/
    @Delete(':id')
    delete(@Res() response, @Param('id') idPlato) {
        this.platoServices.deletePlato(idPlato).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación del plato' });
        });
    }

}
