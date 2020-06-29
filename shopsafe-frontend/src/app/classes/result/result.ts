export class Result {
    id: number;
    fips: number;
    county: string = '';
    state: string = '';
    confirmedCases: number;
    confirmedDeaths: number;

    // Allows for constructing of obj by declaring all class variables
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
