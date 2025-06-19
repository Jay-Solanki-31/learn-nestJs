import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private configService:ConfigService){}
  getHello(): string {

    const appname = this.configService.get<string>('APP_NAME', 'defaultvalue')
    console.log('app name is ', appname);
    return 'Hello World!';
  }
}
