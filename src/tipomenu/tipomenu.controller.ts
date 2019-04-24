import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { TipomenuService } from './tipomenu.service';

@Controller('tipomenu')
export class TipomenuController {
    constructor(private tipomenuService: TipomenuService) { }

    @Get()
    getAll(@Res() response) {
        this.tipomenuService.getAll().then(tipomenuList => {
            response.status(HttpStatus.OK).json(tipomenuList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la obtencion de mensaje' });
        });
    }
}
