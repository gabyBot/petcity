import { IsString, IsEmail } from "class-validator";



export class CreateUserDto {
    @IsString()
    readonly Nombre: string;
    @IsEmail()
    readonly CorreoElectronico: string;
    readonly Telefono: string;
    readonly Rol: string;
  }