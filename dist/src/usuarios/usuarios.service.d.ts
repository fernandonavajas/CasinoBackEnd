import { Repository } from 'typeorm';
import { Usuario } from '../entitys/usuario.entity';
import { usuarioDto } from './usuario-dto';
export declare class loginModel {
    rut: string;
    password: string;
}
export declare class UsuariosService {
    private readonly usuariosRepository;
    constructor(usuariosRepository: Repository<Usuario>);
    getAll(): Promise<Usuario[]>;
    getOne(idUsuario: number): Promise<Usuario>;
    Loggin(auth: loginModel): Promise<any>;
    createUser(usuarioNuevo: usuarioDto): Promise<Usuario>;
    updateUsuario(idUsuario: number, usuarioActualizar: usuarioDto): Promise<Usuario>;
    deleteUsuario(idUsuario: number): Promise<any>;
}
