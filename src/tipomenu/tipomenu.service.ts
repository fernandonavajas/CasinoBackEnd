import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tipomenu } from 'src/entitys/tipomenu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipomenuService {

    constructor(
        @InjectRepository(Tipomenu) 
            private readonly tipomenuRepository: Repository<Tipomenu>, ) {}
            
    async getAll(): Promise<Tipomenu[]> {
        return await this.tipomenuRepository.find();
    }

}

