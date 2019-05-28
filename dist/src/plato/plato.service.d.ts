import { Plato } from 'src/entitys/plato.entity';
import { Repository } from 'typeorm';
import { platoDto } from './plato-dto';
export declare class PlatoService {
    private readonly platoRepository;
    constructor(platoRepository: Repository<Plato>);
    getAll(): Promise<Plato[]>;
    getOne(idPlato: number): Promise<Plato>;
    createUser(platoNuevo: platoDto): Promise<Plato>;
    updatePlato(idPlato: number, platoActualizar: platoDto): Promise<Plato>;
    deletePlato(idPlato: number): Promise<any>;
}
