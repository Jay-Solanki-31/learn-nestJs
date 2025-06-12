import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';


// model have import and exort service and controller
@Module({
  controllers: [HelloController],
  providers: [HelloService]
})
export class HelloModule {}
