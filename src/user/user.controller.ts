import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }
    @Get(':id/welcome')
    getWelcomeMessWithUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getWelcomeMessWithUser(userId);
    }

}
