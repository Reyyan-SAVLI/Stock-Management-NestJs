import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto{
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Reyyan'
    })
    name: string;

    @IsString()
    @ApiProperty({
        example: 'Şavlı'
    })
    surname: string;

    @IsString()
    @ApiProperty({
        example: '05445444444'
    })
    phone: string;

    @IsString()
    @ApiProperty({
        example: '123456'
    })
    password: string;

    @IsEmail()
    @ApiProperty({
        example: 'reyyan@gmail.com'
    })
    email: string;
}