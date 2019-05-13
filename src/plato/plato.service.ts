import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plato } from 'src/entitys/plato.entity';
import { Repository } from 'typeorm';
import { platoDto } from './plato-dto';

@Injectable()
export class PlatoService {
    constructor(
        @InjectRepository(Plato)
        private readonly platoRepository: Repository<Plato>, ) { }

    async getAll(): Promise<Plato[]> {
        return await this.platoRepository.find();
    }

    async getOne(idPlato: number): Promise<Plato> {
        return await this.platoRepository.findOne(idPlato);
    }
    async createUser(platoNuevo: platoDto): Promise<Plato> {
        const nuevo = new Plato();
        nuevo.nombre = platoNuevo.nombre;
        nuevo.descripcion = platoNuevo.descripcion;// modificar para que sea correcto
        nuevo.foto = platoNuevo.foto;
        nuevo.calorias = platoNuevo.calorias;

        return await this.platoRepository.save(nuevo);
    }
    async updatePlato(idPlato: number, platoActualizar: platoDto): Promise<Plato> {
        const platoUpdate = await this.platoRepository.findOne(idPlato);
        platoUpdate.nombre = platoActualizar.nombre;
        platoUpdate.descripcion = platoActualizar.descripcion;
        platoUpdate.calorias = platoActualizar.calorias;
        platoUpdate.foto = platoActualizar.foto;

        return await this.platoRepository.save(platoUpdate)
    }
    async deletePlato(idPlato: number): Promise<any> {
        return await this.platoRepository.delete(idPlato);
    }

}
