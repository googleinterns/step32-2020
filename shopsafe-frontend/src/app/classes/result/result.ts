import { Store } from '../store/store';
import { CountyStats } from '../county-stats/county-stats';
/**
 * Result that is rendered in the template search result form
 */
export class Result {
    nearbyStores: Store[];
    countyStats: CountyStats;

    // Allows for constructing of obj by declaring all class variables
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
