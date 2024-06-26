import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/dtos/login-user.dto';
import { ReLoginUserDto } from 'src/dtos/reLogin-user.dto';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { User } from 'src/entities/user.entity';
import { PRIVATEKEY, SECRET } from 'src/business/config/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    generateToken(user: User): string{
        const token = this.jwtService.sign(
            {id: user.id, email: user.email},
            {secret: SECRET, privateKey: PRIVATEKEY}
        );
        return token;
    }

    async login(loginUserDto: LoginUserDto): Promise<ReLoginUserDto>{
        const user = await this.userService.findEmail(loginUserDto.email);
        if (!user) {
            const errors = { email: 'Email not found'};
            throw new HttpException({
                message: "Login failed",
                errors
            },
            HttpStatus.BAD_REQUEST);
        }
        const hash = await argon2.hash(user.password); 
        if (await argon2.verify(hash, loginUserDto.password)){
            const result = new ReLoginUserDto();
            result.id = user.id;
            result.email = user.email;
            result.token =  this.generateToken(user);

            return result;
        }
        const errors = { email: 'Email or Password is wrong'};
            throw new HttpException({
                message: "Login failed",
                errors
            },
            HttpStatus.BAD_REQUEST);
    }

}
