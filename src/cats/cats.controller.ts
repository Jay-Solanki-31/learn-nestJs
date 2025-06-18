import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor(private readonly catService: CatsService){}
    
    @Get('first-route')
    getHello(): string{
        return this.catService.getCatname();
    }

    @Get('/cat/:spice')
    getCatSpecies(@Param('spice')spice :string): string{
        return this.catService.getCatSpecies(spice)
    }


    @Get('query')
    getCatSpeciesWithquery(@Query('spice') spice: string): string{
        return this.catService.getCatSpecies(spice || 'persion')
    }
}
