import { CountyStatsInterface } from 'src/app/interfaces/interface';

export class CountyStats implements CountyStatsInterface {
    countyName: string = '';
    stateName: string = '';
    cases: number;
    deaths: number;
    population: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
