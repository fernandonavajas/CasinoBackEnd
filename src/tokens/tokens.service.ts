import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tokens } from 'src/entitys/tokens.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TokensService {
    constructor(
        @InjectRepository(Tokens) 
            private readonly tipomenuRepository: Repository<Tokens>, ) {}
            
    async getAll(): Promise<Tokens[]> {
        return await this.tipomenuRepository.find();
    }

}

