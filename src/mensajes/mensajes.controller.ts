import { Controller, Body, Post, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto'
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajeServices: MensajesService) { }

    @Post()
    // encapsula la variable para resivirla como objeto
    create (@Body() createMensageDto: CreateMensajeDto, @Res() response) {
        this.mensajeServices.createMensaje(createMensageDto)
            .then(mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación' });
            });
    }

    @Get()// Leer los datos
    getAll(@Res() response) {
        this.mensajeServices.getAll().then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });

    }
    @Get(':id')// Leer los datos
    getOne(@Res() response, @Param ('id') idMesaje) {
        this.mensajeServices.getOne(idMesaje).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });

    }

    @Put(':id') // actualizar la data
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje) {
        this.mensajeServices.updateMensaje(idMensaje, updateMensajeDto).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición del mensaje' });
        });
    }

    @Delete(':id') // eliminar registro
    delete(@Res() response, @Param('id') idMensaje) {
        this.mensajeServices.deleteMensaje(idMensaje).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación del mensaje' });
        });
    }


}

