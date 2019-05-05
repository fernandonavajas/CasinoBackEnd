import { Controller, Get, Res, HttpStatus, Param, Post, Body, Put, Delete, All, Next, Req, Header } from '@nestjs/common';
import { UsuariosService, loginModel } from './usuarios.service';
import { usuarioDto } from './usuario-dto';


@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioServices: UsuariosService) { 
    }
    //****************************       Listar todos los usuarios ******************************/
    
    @Get()
    getAll(@Res() response) {
        this.usuarioServices.getAll().then(usuariosList => {
            response.status(HttpStatus.OK).json(usuariosList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de usuarios' });
        });
    }
    //***********************        Obtener solo un usuario *********************************/
    
    @Get(':id')
    getOne(@Res() response, @Param('id') id) {
        this.usuarioServices.getOne(id).then(usuariosList => {
            response.status(HttpStatus.OK).json(usuariosList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtencion de usuario1' });
        });
    }

    //************************************          Login           ********************************** */
    /*
    @Get('/login')
    Autentificacion(@Body() auth: loginModel, @Res() response) {
        this.usuarioServices.Loggin(auth).then(usuario => {
            response.status(HttpStatus.OK).json(usuario);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error de sesión, no figura en la base de datos' });
        });
    }
    */
    //*******************************         Crear usuario          ************************************/
    @Post()
    create(@Body() crearUsuarioDto: usuarioDto, @Res() response) {
        console.log('entre pp');
        this.usuarioServices.createUser(crearUsuarioDto)
            .then(usuario => {
                response.status(HttpStatus.CREATED).json(usuario);
            }).catch(() => {
                response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del usuario' });
            });
    }
    //*******************************         Modificar a un  usuario          ******************************/
    @Put(':id') // 
    update(@Body() updateUserDto: usuarioDto, @Res() response, @Param('id') idUsuario) {
        this.usuarioServices.updateUsuario(idUsuario, updateUserDto).then(usuario => {
            response.status(HttpStatus.OK).json(usuario);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la edición del usuario' });
        });
    }
    //*******************************         Eliminar a un  usuario          **********************************/
    @Delete(':id')
    delete(@Res() response, @Param('id') idUsuario) {
        this.usuarioServices.deleteUsuario(idUsuario).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación del usuario' });
        });
    }

}