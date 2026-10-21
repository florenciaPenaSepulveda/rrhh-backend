import { IsString, IsEmail, MinLength, IsNumber } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'El email debe tener un formato válido' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}

export class RegisterDto {
    @IsString()
    rut: string;

    @IsEmail({}, { message: 'El email debe tener un formato válido' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}