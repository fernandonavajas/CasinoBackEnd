import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
export declare class MensajesController {
    private mensajeServices;
    constructor(mensajeServices: MensajesService);
    create(createMensageDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    getOne(response: any, idMesaje: any): void;
    update(updateMensajeDto: CreateMensajeDto, response: any, idMensaje: any): void;
    delete(response: any, idMensaje: any): void;
}
