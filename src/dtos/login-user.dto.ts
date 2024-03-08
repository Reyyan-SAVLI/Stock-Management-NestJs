import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto{
 
    @ApiProperty({
        example: 'reyyan@gmail.com',
        description: 'Enter Email'
    })
    email: string;
 
    @ApiProperty({
        example: '123456',
        description: 'Enter Password'
    })
    password: string;
}