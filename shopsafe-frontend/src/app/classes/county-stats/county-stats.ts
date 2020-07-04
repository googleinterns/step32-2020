export class CountyStats {
    countyName: string = '';
    stateName: string = '';
    cases: number;
    deaths: number;
    population: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
