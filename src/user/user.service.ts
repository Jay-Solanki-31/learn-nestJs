import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
    // injecting HelloService in UserService
    // hello module must export HelloService
    // user module must import HelloModule
    constructor(private readonly helloService: HelloService) { }
    
    getAllUsers() {
        return  [
            {
                id: 1,
                name: 'jay'
            },
            {
                id: 2,
                name: 'kishore'
            },
            {
                id: 3,
                name: 'nathan'
            }
        ]
    }

    getUserById(id: number) {
        const user = this.getAllUsers().find(user => user.id === id);
        return user
    }

    getWelcomeMessWithUser(userId: number) {
        const user = this.getUserById(userId);

        if (!user) {
            return 'User not Found'
        }

        return this.helloService.getHelloWithName(user?.name);
    }
}
