import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';


@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioServices: UsuariosService) { }

    @Get()
    getAll(@Res() response) {
        this.usuarioServices.getAll().then(usuariosList => {
            response.status(HttpStatus.OK).json(usuariosList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
}