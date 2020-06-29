import { Store } from '../store/store';
/**
 * Result that is rendered in the template search result form
 */
export class Result {
    id: string = '';
    fips: number;
    county: string = '';
    state: string = '';
    confirmedCases: number;
    confirmedDeaths: number;
    nearbyStores: Store[];

    // Allows for constructing of obj by declaring all class variables
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
