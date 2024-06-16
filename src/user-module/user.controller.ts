import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/userModule.dto";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService) { }
    
    @Post()
    async createUser(@Body() userDetails : CreateUserDto) {
        return await this.userService.createUser(userDetails);
    }

    @Get()
    async getAllUser() {
        return await this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id')id : string) {
        return await this.userService.getUserById(id)
    }

}