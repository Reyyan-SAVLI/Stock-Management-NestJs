import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdateUserDto } from 'src/dtos/update-user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    getUser(){
        return this.userService.getUser();
    }

    @Put(':id')
    updateUser(
        @Param('id') id: number,
        @Body() updateUserDto: UpdateUserDto){
        updateUserDto.id = id;

        return this.userService.updateUser(updateUserDto);
    }
}
