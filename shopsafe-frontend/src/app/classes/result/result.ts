export class Result {
    id: number;
    fips: number;
    county: string = '';
    state: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
