import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';


// model have import and exort service and controller
@Module({
  controllers: [HelloController],
  providers: [HelloService],
  exports:[HelloService]   // export hello service so that it cna use in other module 
})
export class HelloModule {}
