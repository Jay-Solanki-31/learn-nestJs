import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {

    // handel business logic of code 
    getHello(): string {
        return 'Hello NestJs!';
    }

    getHelloWithName(name: string): string {
        return `Hello ${name}!`;
    }
}
