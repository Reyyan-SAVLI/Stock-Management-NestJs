import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>){}

    async getUser(){
        return await this.userRepository.find();
    }

    async updateUser(updateUserDto: UpdateUserDto){
        const user = await this.userRepository.findOne({
            where:{id: updateUserDto.id}
        });

        if (user) {
            user.name = updateUserDto.name;
            user.surname = updateUserDto.surname;
            user.email = updateUserDto.email;
            user.phone = updateUserDto.phone;
            user.password = updateUserDto.password;
        }else{
            throw error;
        }
        await this.userRepository.save(user);

    }

    findEmail(email: string): Promise<User>{
        return this.userRepository.findOneBy({email});
    }
    
}
