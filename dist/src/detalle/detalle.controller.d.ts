import { DetalleService } from './detalle.service';
import { CreateDetalleDto } from './detalle-dto';
export declare class DetalleController {
    private detalleService;
    constructor(detalleService: DetalleService);
    getAll(response: any): void;
    create(creardetalle: CreateDetalleDto, response: any): void;
}
