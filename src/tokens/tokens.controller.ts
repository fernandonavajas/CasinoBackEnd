import { Controller, Get, Res, HttpStatus, Headers, Put, Body, Head, Post } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokensDto } from './tokens-dto';
import { Usuario } from 'src/entitys/usuario.entity';

@Controller('tokens')
export class TokensController {
    constructor(private tokenService: TokensService) { }

    @Get()
    getOne(@Headers() headers, @Res() response) {
        this.tokenService.getOne(headers.rut).then(tokens => {
            response.status(HttpStatus.OK).json(tokens);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de tokens' });
        });
    }
    @Put() // 
    update(@Headers() headers, @Res() response) {
        console.log(headers.rut,headers.pass)
        this.tokenService.updatePassword(headers.rut,headers.pass ).then(tokens => {
            response.status(HttpStatus.OK).json(tokens);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición de tokens' });
        });
    }
    @Post()
    create(@Headers() headers, @Res() response) {
        this.tokenService.crearTokens(headers.idusuario,headers.rut)
            .then(usuario => {
                response.status(HttpStatus.CREATED).json(usuario);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del usuario' });
            });
    }

}
