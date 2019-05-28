import { UsuariosService } from './usuarios.service';
import { usuarioDto } from './usuario-dto';
export declare class UsuariosController {
    private usuarioServices;
    constructor(usuarioServices: UsuariosService);
    getAll(response: any): void;
    getOne(response: any, id: any): void;
    Autentificacion(headers: any, response: any): void;
    create(crearUsuarioDto: usuarioDto, response: any): void;
    update(updateUserDto: usuarioDto, response: any, idUsuario: any): void;
    delete(response: any, idUsuario: any): void;
}
