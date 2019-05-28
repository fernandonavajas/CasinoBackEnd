import { Repository } from 'typeorm';
import { Detalle } from 'src/entitys/detalle.entity';
import { CreateDetalleDto } from './detalle-dto';
export declare class DetalleService {
    private readonly detalleRepository;
    constructor(detalleRepository: Repository<Detalle>);
    getAll(): Promise<Detalle[]>;
    crearDetalle(nuevoDetalle: CreateDetalleDto): Promise<any>;
    crearDetalleBueno(crearDetalle: CreateDetalleDto): Promise<any[]>;
}
