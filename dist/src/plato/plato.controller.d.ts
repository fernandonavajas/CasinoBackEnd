import { PlatoService } from './plato.service';
import { platoDto } from './plato-dto';
export declare class PlatoController {
    private platoServices;
    constructor(platoServices: PlatoService);
    getAll(response: any): void;
    getOne(response: any, id: any): void;
    create(crearPlatoDTO: platoDto, response: any): void;
    update(updatePlatoDTO: platoDto, response: any, idPlato: any): void;
    delete(response: any, idPlato: any): void;
}
