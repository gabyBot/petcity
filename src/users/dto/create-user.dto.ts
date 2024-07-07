import { IsString, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly Nombre: string;
  @IsEmail()
  readonly CorreoElectronico: string;
  @IsNumber()
  readonly Telefono: number;
  @IsString()
  readonly Rol: string;
}
