import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    getCatname(): string{
        return 'hey from nestJs'
    }

    getCatSpecies(spice:string): string{
        return `Cat Species is->${spice}`
    }
}
