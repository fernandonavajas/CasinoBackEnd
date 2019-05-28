import { Tipomenu } from 'src/entitys/tipomenu.entity';
import { Repository } from 'typeorm';
export declare class TipomenuService {
    private readonly tipomenuRepository;
    constructor(tipomenuRepository: Repository<Tipomenu>);
    getAll(): Promise<Tipomenu[]>;
}
