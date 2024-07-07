import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './users.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users = [
    {
      ID: 1,
      Nombre: 'user1',
      CorreoElectronico: 'correo@correo-cl.com',
      Telefono: '9892833',
      Rol: 'Admin',
    },
    {
      ID: 2,
      Nombre: 'user2',
      CorreoElectronico: 'mail@correo.cl',
      Telefono: '9895555',
      Rol: 'AdminCuentas',
    },
    {
      ID: 3,
      Nombre: 'user3',
      CorreoElectronico: 'cmm@mail.cl',
      Telefono: '9892833',
      Rol: 'AdminCM',
    },
  ];

  findAll(): Users[] {
    return this.users;
  }

  findOne(ID: number) {
    const UserFound = this.users.find(user => user.ID === ID);
    if (!UserFound) {
      return new NotFoundException(`User with ID ${ID} not found`);
    };
    return UserFound;
  }

  create(createUserDto: CreateUserDto) {
    const newUser: Users = {
      ID: this.users.length + 1, // Asigna un nuevo ID basado en el número actual de usuarios
      Nombre: createUserDto.Nombre,
      CorreoElectronico: createUserDto.CorreoElectronico,
      Telefono: createUserDto.Telefono,
      Rol: createUserDto.Rol,
    };

    this.users.push(newUser); // Agrega el nuevo usuario al arreglo

    return newUser; // Retorna el usuario recién creado
  }
  update(updateUserDto: UpdateUserDto) {
    return `This action update a user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
