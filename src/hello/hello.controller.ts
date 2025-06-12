import { HelloService } from './hello.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('hello')
export class HelloController {

    // dependency injection
    // controller have access to service and consume service 
    constructor(private readonly helloService: HelloService) { }
    
    // http://localhost:3000/hello
    // ṛoute
    @Get()
    getHello(): string{
        return this.helloService.getHello();
    }

    // route parameter example
    // http://localhost:3000/hello/user/abc
    @Get('user/:name')
    getHelloWithName(@Param('name') name: string): string{
        return this.helloService.getHelloWithName(name);
    }
  
}
