import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
    constructor(private tokenService: TokensService) { }

    @Get()
    getAll(@Res() response) {
        this.tokenService.getAll().then(tokensList => {
            response.status(HttpStatus.OK).json(tokensList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
}
